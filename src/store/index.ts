import { AppState } from '../utils/types';

export const defaultState: AppState = {
	noticeError: '',
	noticeSuccess: '',
	user: null,
	avatar: 'avatar.svg',
	chatList: [],
	activeChat: null,
	activeChatUsers: [],
	activeModal: '',
};
