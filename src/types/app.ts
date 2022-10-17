import { User } from './user';
import { ChatItemType } from '../utils/types';

export type AppState = {
	noticeError: string,
	noticeSuccess: string,
	user: Nullable<User>,
	avatar: string,
	chatList: [],
	activeChat: Nullable<ChatItemType>,
	activeChatUsers: [],
	activeModal: string,
}
