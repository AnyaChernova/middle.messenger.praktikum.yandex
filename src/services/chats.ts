import { ChatDTO, ChatItemDTO } from '../api/types';
import { Dispatch } from '../core/Store';
import { AppState } from '../types/app';
import { ChatsApi } from '../api/chats';
import { transformChatItem } from '../utils/apiTransformers';

const api = new ChatsApi();

export const createChat = async (dispatch: Dispatch<AppState>, _state: AppState, data: ChatDTO) => {
	try {
		await api.create(data);
		dispatch({ noticeSuccess: 'New chat added successfully' });
		await getChats(dispatch);
	} catch (err: any) {
		if (err?.data?.reason) {
			dispatch({ noticeError: err.data.reason });
		}
	}
};

export const setActiveChat = async (dispatch: Dispatch<AppState>, state: AppState, chatId: number) => {
	const chat = state.chatList.find(({id}) => id === chatId);
	dispatch({ activeChat: chat });
};

export const getChats = async (dispatch: Dispatch<AppState>) => {
	try {
		const response = await api.list();
		if (response.data) {
			dispatch({
				chatList: response.data.map((item: ChatItemDTO) => transformChatItem(item)),
			});
			dispatch({ activeChat:  response.data[0] });
		}
	} catch (e) {
		console.log(e);
	}
};
