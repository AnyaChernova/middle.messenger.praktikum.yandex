import { Block } from '../core/Block';
import { User } from '../types/user';

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
	name: string;
	userClass?: string;
	caption?: string;
	id?: number;
	avatar?: AvatarType | Block<AvatarType> | string;
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
export type ChatMessageType = {
	user: User;
	time: string;
	content: string;
};

export type ChatItemType = {
	id: number;
	title: string;
	avatar: string | null;
	unreadCount: number;
	lastMessage: Nullable<ChatMessageType>;
	isActive?: boolean;
};

export {
	AvatarType,
	FieldType,
	MessageType,
	UserType,
	TabType,
	BtnType,
	LinkType,
};
