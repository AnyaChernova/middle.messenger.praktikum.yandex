import { ChatDTO } from '../api/types';
import { Dispatch } from '../core/Store';
import { AppState } from '../types/app';
import { ChatsApi } from '../api/chats';

const api = new ChatsApi();

export const createChat = async (dispatch: Dispatch<AppState>, _state: AppState, data: ChatDTO) => {
	try {
		await api.create(data);
	} catch (err: any) {
		if (err?.data?.reason) {
			dispatch({ noticeError: err.data.reason });
		}
	}
};

export const getChats = async () => {
	try {
		await api.list();
	} catch (e) {
		console.log(e);
	}
};
