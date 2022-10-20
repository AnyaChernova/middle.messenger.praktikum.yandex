import {
 ChatDTO, ChatItemDTO, ChatMessageSocket, UserDTO,
} from '../api/types';
import { Dispatch } from '../core/Store';
import { AppState, ChatItemType } from '../utils/types';
import { ChatsApi } from '../api/chats';
import { transformChatItem, transformSocketMessage, transformUser } from '../utils/apiTransformers';
import { WS } from '../core/WS';

const api = new ChatsApi();

export const createChat = async (
	dispatch: Dispatch<AppState>,
	_state: AppState,
	data: ChatDTO,
) => {
	try {
		await api.create(data);
		dispatch({ noticeSuccess: 'New chat added successfully' });
	} catch (err: any) {
		if (err?.data?.reason) {
			dispatch({ noticeError: err.data.reason });
		}
	}
};

export const deleteChat = async (
	dispatch: Dispatch<AppState>,
	_state: AppState,
	chatId: number = 0,
) => {
	try {
		await api.delete(chatId);
		dispatch({ noticeSuccess: 'Chat deleted successfully' });
	} catch (err: any) {
		if (err?.data?.reason) {
			dispatch({ noticeError: err.data.reason });
		}
	}
};

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

export const setActiveChat = async (
	dispatch: Dispatch<AppState>,
	state: AppState,
	chatId: number = 0,
) => {
	let chat: Nullable<ChatItemType> = null;

	if (chatId) {
		chat = state.chatList.find(({ id }) => id === chatId)!;
	} else if (state.chatList[0]) {
		chat = state.chatList[0];
	}

	if (chat) {
		dispatch({
			activeChat: chat,
			activeChatMessages: [],
			chatLoading: true,
		});
		getChatUsers(dispatch, chat.id);
	}
};

export function initActiveChat(dispatch: Dispatch<AppState>, state: AppState) {
	if (state.activeChat && state.activeChat.ws) {
		state.activeChat.ws.onMessage = (data: ChatMessageSocket | ChatMessageSocket[]) => {
			if (Array.isArray(data)) {
				const messages = data.reverse().map((message) => transformSocketMessage(message));
				dispatch({ activeChatMessages: messages });
			} else if (data.type === 'message' || data.type === 'file') {
				const message = transformSocketMessage(data);
				// @ts-expect-error this is not typed
				dispatch({ activeChatMessages: [...this.props.activeChatMessages, message] });
			}
			dispatch({ chatLoading: false });
		};

		if (state.activeChat.ws.isOpen) {
			state.activeChat!.ws!.send({
				content: '0',
				type: 'get old',
			});
		} else {
			state.activeChat.ws.onOpen = () => {
				state.activeChat!.ws!.send({
					content: '0',
					type: 'get old',
				});
			};
		}
	}
}

export const initChat = async (
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

export const getChats = async (dispatch: Dispatch<AppState>, state: AppState) => {
	dispatch({ chatLoading: true });
	try {
		const response = await api.list();
		if (response.data) {
			const chats = response.data.map((item: ChatItemDTO) => transformChatItem(item));
			await Promise.all(chats.map((chat: ChatItemType) => initChat(state, chat)));

			dispatch({ chatList: chats });
		}
	} catch (e) {
		console.log(e);
	}
};

export const updateUsers = async (
	dispatch: Dispatch<AppState>,
	state: AppState,
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
	} catch (err: any) {
		if (err?.data?.reason) {
			dispatch({ noticeError: err.data.reason });
		}
	}
};
