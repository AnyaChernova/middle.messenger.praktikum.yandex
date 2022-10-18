import { Block } from '../core/Block';

type AppState = {
	noticeError: string,
	noticeSuccess: string,
	user: Nullable<UserType>,
	avatar: string,
	chatList: ChatItemType[],
	activeChat: Nullable<ChatItemType>,
	activeChatUsers: UserType[],
	activeModal: string,
}

type AvatarType = {
	class?: string;
	title?: string;
	url: string;
	size: number;
};

type FieldType = {
	fieldClass?: string;
	inputClass?: string;
	labelClass?: string;
	id?: string;
	name?: string;
	value?: string;
	title?: string;
	type?: string;
	minLength?: number;
	maxLength?: number;
	events?: Record<string, object>;
};

type MessageType = {
	text: string;
	itemClass?: string;
	mainClass?: string;
	mediaClass?: string;
	messageClass?: string;
	user?: AvatarType | Block<AvatarType>;
	avatar?: AvatarType | Block<AvatarType>;
};

type UserType = {
	id: number;
	login: string;
	firstName: string;
	secondName: string;
	displayName: string;
	avatar: string;
	phone: string;
	email: string;
	role?: string;
};

type UserMediaType = {
	name?: string;
	userClass?: string;
	caption?: string;
	isRemove?: boolean;
	id?: number;
	avatar?: AvatarType | Block<AvatarType> | string;
	events?: Record<string, object>;
};

type TabType = {
	user: UserType | Block<UserType>;
	time: string;
	tabClass?: string;
	userClass?: string;
	titleClass?: string;
	newCounter?: number;
};

type BtnType = {
	btnClass?: string;
	btnText?: string;
	btnTextClass?: string;
	btnIcon?: string;
	btnIconClass?: string;
	btnType?: string;
	asLink?: boolean;
	isLoading?: boolean;
	events?: Record<string, object>;
};

type LinkType = {
	to?: string;
	linkClass?: string;
	activeClass?: string;
	linkText: string;
	linkIcon?: string;
	linkIconClass?: string;
	events?: Record<string, object>;
};

type ChatMessageType = {
	user: UserType;
	time: string;
	content: string;
};

type ChatItemType = {
	id: number;
	title: string;
	avatar: string | null;
	unreadCount: number;
	lastMessage: Nullable<ChatMessageType>;
	isActive?: boolean;
};

export {
	AppState,
	AvatarType,
	FieldType,
	MessageType,
	UserType,
	UserMediaType,
	TabType,
	BtnType,
	LinkType,
	ChatItemType,
	ChatMessageType
};
