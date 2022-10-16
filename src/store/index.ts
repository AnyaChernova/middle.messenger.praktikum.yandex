import { AppState } from '../types/app';

export const defaultState: AppState = {
	noticeError: '',
	noticeSuccess: '',
	user: null,
	avatar: 'avatar.svg',
	chatList: [],
	activeChat: null,
	activeModal: '',
};
