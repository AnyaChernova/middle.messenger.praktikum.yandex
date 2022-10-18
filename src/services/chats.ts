import { ChatDTO, ChatItemDTO, UserDTO } from '../api/types';
import { Dispatch } from '../core/Store';
import { AppState } from '../utils/types';
import { ChatsApi } from '../api/chats';
import { transformChatItem, transformUser } from '../utils/apiTransformers';

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

export const setActiveChat = async (
	dispatch: Dispatch<AppState>,
	state: AppState,
	chatId: number = 0,
) => {
	if (chatId) {
		const chat = state.chatList.find(({ id }) => id === chatId);
		await dispatch({ activeChat: chat });
		await getChatUsers(dispatch, chatId);
	} else if (state.chatList[0]) {
		dispatch({ activeChat: state.chatList[0] });
		await getChatUsers(dispatch, state.chatList[0].id);
	}
};

export const getChats = async (dispatch: Dispatch<AppState>) => {
	try {
		const response = await api.list();
		if (response.data) {
			dispatch({
				chatList: response.data.map((item: ChatItemDTO) => transformChatItem(item)),
			});
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
