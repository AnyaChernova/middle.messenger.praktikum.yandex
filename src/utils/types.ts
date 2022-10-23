import { Block } from '../core/Block';
import { WS } from '../core/WS';

type AppState = {
	appInit: boolean,
	chatInit: boolean,
	noticeError: string,
	noticeSuccess: string,
	user: Nullable<UserType>,
	avatar: string,
	chatList: ChatItemType[],
	activeChat: Nullable<ChatItemType>,
	activeChatUsers: UserType[],
	activeChatMessages: ChatMessageType[],
	activeModal: string,
	chatLoading: boolean,
	errorCode?: number,
};

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
	content: string;
	time: string;
	title?: string;
	itemClass?: string;
	mainClass?: string;
	mediaClass?: string;
	messageClass?: string;
	day?: string;
	isImg?: boolean;
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

type ChatFileType = {
	id: number;
	userId: number;
	path: string;
	filename: string;
	contentType: string;
	contentSize: string;
	uploadDate: string;
};

type ChatMessageType = {
	userId?: number,
	user?: UserType;
	time: string;
	content: string;
	file?: ChatFileType;
};

type ChatItemType = {
	id: number;
	title: string;
	avatar: string | null;
	unreadCount: number;
	lastMessage: Nullable<ChatMessageType>;
	isActive?: boolean;
	ws?: WS;
};

type SocketMessageType = {
	content?: string;
	type: string;
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
	ChatMessageType,
	ChatFileType,
	SocketMessageType,
};
