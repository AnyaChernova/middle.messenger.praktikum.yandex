import { User } from './user';

export type AppState = {
	noticeError: string,
	noticeSuccess: string,
	user: Nullable<User>,
	avatar: string,
}
