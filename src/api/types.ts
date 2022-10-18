export type APIError = {
	reason: string;
};

export type UserDTO = {
	id: number;
	login: string;
	first_name: string;
	second_name: string;
	display_name: string;
	avatar: string;
	phone: string;
	email: string;
	role?: string;
};

export type AuthDTO = {
	login: string;
	password: string;
	first_name?: string;
	second_name?: string;
	phone?: string;
	email?: string;
};

export type ChatDTO = {
	title: string;
};

export type ChatMessageDTO = {
	user: UserDTO;
	time: string;
	content: string;
};

export type ChatItemDTO = {
	id: number;
	title: string;
	avatar: string | null;
	unread_count: number;
	last_message:Nullable<ChatMessageDTO>;
};

export type UsersToChatDTO = {
	users: number[];
	chatId: number;
};
