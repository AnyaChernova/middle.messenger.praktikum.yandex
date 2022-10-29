import { AppState } from '../utils/types';

export const defaultState: AppState = {
	appInit: false,
	chatInit: false,
	noticeError: '',
	noticeSuccess: '',
	user: null,
	avatar: 'avatar.svg',
	chatList: [],
	activeChat: null,
	activeChatUsers: [],
	activeChatMessages: [],
	activeModal: '',
	chatLoading: false,
};
