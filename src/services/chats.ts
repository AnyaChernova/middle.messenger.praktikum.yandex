import {
	ChatDTO,
	ChatItemDTO,
	ChatMessageSocket,
	UserDTO,
} from '../api/types';
import { Dispatch, StateFunction } from '../core/Store';
import { AppState, ChatItemType } from '../utils/types';
import { ChatsApi } from '../api/chats';
import {
	transformChatItem,
	transformChatTime,
	transformSocketMessage,
	transformUser,
} from '../utils/apiTransformers';
import { WS } from '../core/WS';
import { setError } from './setError';

const api = new ChatsApi();

export const getChatUsers = async (dispatch: Dispatch<AppState>, chatId: number) => {
	try {
		const response = await api.users(chatId);
		if (response.data) {
			dispatch({
				activeChatUsers: response.data.map((user: UserDTO) => transformUser(user)),
			});
		}
	} catch (e) {
		console.log(e);
	}
};

export const getChatToken = async (chatId: number = 0) => {
	try {
		const response = await api.token(chatId);
		if (response.data) {
			return response.data.token;
		}
		return '';
	} catch (e) {
		console.log(e);
		return '';
	}
};

export const setActiveChat: StateFunction = async (
	dispatch,
	state,
	chatId = 0,
) => {
	let chat: Nullable<ChatItemType> = null;

	if (chatId) {
		chat = state.chatList.find(({ id }) => id === chatId)!;
	} else if (state.chatList[0]) {
		chat = state.chatList[0];
	}

	if (chat) {
		chat.unreadCount = 0;

		dispatch({
			activeChat: chat,
			activeChatMessages: [],
			chatLoading: true,
		});

		if (chat.ws!.isOpen) {
			chat.ws!.send({
				content: '0',
				type: 'get old',
			});
		} else {
			chat.ws!.onOpen = () => {
				chat!.ws!.send({
					content: '0',
					type: 'get old',
				});
			};
		}
		getChatUsers(dispatch, chat.id);
	}
};

export const setSocketChat = async (
	state: AppState,
	chat: ChatItemType,
) => {
	const token = await getChatToken(chat.id);
	if (token) {
		chat.ws = new WS({
			token,
			chatId: chat.id,
			userId: state.user!.id,
		});
	}
};

export function initChat(
	dispatch: Dispatch<AppState>,
	_state: AppState,
	chat: ChatItemType,
) {
	if (chat.ws) {
		chat.ws.onMessage = (data: ChatMessageSocket | ChatMessageSocket[]) => {
			// @ts-expect-error this is not typed
			const activeChat = this.props.activeChat;
			// @ts-expect-error this is not typed
			const chatList = this.props.chatList;
			// @ts-expect-error this is not typed
			const activeChatMessages = this.props.activeChatMessages;

			if (Array.isArray(data)) {
				const messages = data.reverse().map((message) => transformSocketMessage(message));

				dispatch({ activeChatMessages: messages, chatLoading: false });
			} else if (data.type === 'message' || data.type === 'file') {
				if (chat.id !== activeChat!.id) {
					const chats = chatList.map((item: ChatItemType) => ((item.id === chat.id) ? {
							...item,
							unreadCount: item.unreadCount + 1,
						} : item));
					const chatsSorted = chats.sort((a: ChatItemType, b: ChatItemType) => (
						(b.id === activeChat.id) ? 1 : b.unreadCount - a.unreadCount
					));

					dispatch({ chatList: chatsSorted });
				}
				if (data.chat_id === activeChat!.id) {
					const message = transformSocketMessage(data);
					const activeChatIndex = chatList.findIndex((c: ChatItemType) => c.id === data.chat_id);
					const lastMessage = {
						content: data.content,
						userId: data.user_id,
						time: transformChatTime(data.time),
					};
					const activeChatNew = {
						...activeChat,
						lastMessage,
					};
					let chats = [...chatList];

					if (activeChatIndex !== 0) {
						chats.splice(activeChatIndex, 1);
						chats = [activeChatNew, ...chats];
					}

					dispatch({
						activeChatMessages: [...activeChatMessages, message],
						chatList: chats,
						activeChat: activeChatNew,
					});
				}
			}
		};
	}
}

export const getChats: StateFunction = async (dispatch, state) => {
	dispatch({ chatLoading: true });
	try {
		const response = await api.list();
		if (response.data) {
			const chats = response.data.map((item: ChatItemDTO) => transformChatItem(item));
			await Promise.all(chats.map((chat: ChatItemType) => setSocketChat(state, chat)));

			dispatch({
				chatList: chats,
				chatInit: true,
			});
		}
	} catch (e) {
		console.log(e);
	}
	dispatch({ chatLoading: false });
};

export const updateUsers: StateFunction = async (
	dispatch,
	state,
	data: number[],
) => {
	const users = state.activeChatUsers.map(({ id }) => id);
	const usersToAdd = data.filter((id) => !users.includes(id));
	const usersToDelete = users.filter((id) => !data.includes(id));

	if (!usersToDelete.length && !usersToAdd.length) {
		return;
	}

	try {
		if (usersToAdd.length) {
			await api.addUsers({
				users: usersToAdd,
				chatId: state.activeChat!.id,
			});
		}

		if (usersToDelete.length) {
			await api.deleteUsers({
				users: usersToDelete,
				chatId: state.activeChat!.id,
			});
		}

		await getChatUsers(dispatch, state.activeChat!.id);

		dispatch({ noticeSuccess: 'Chat users updated successfully' });
	} catch (e) {
		dispatch(setError, e);
	}
};

export const createChat: StateFunction = async (
	dispatch,
	state,
	data: ChatDTO,
) => {
	try {
		await api.create(data);
		const response = await api.getChat(data);
		if (response.data) {
			const chats = [...state.chatList];
			const newChat = transformChatItem(response.data[0] as ChatItemDTO);
			await setSocketChat(state, newChat);
			dispatch({
				chatList: [newChat, ...chats],
				noticeSuccess: 'New chat added successfully',
			});
		}
	} catch (e) {
		dispatch(setError, e);
	}
};

export const deleteChat: StateFunction = async (
	dispatch,
	state,
	chatId: number = 0,
) => {
	try {
		await api.deleteChat(chatId);
		const chats = [...state.chatList];
		const index = chats.findIndex(({ id }) => id === chatId);
		if (index !== -1) {
			chats[index].ws!.close();
			chats.splice(index, 1);
		}
		dispatch({
			chatList: chats,
			noticeSuccess: 'Chat deleted successfully',
		});
	} catch (e) {
		dispatch(setError, e);
	}
};
