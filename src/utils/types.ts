import Block from '../modules/Block';

type AvatarType = {
	class?: string,
	url: string,
	size: number,
};

type PageType = {
	main?: boolean,
	settings?: boolean,
	profile?: boolean,
	password?: boolean,
	title?: string,
};

type FieldType = {
	fieldClass?: string,
	inputClass?: string,
	labelClass?: string,
	name?: string,
	title?: string,
	type?: string,
	minLength?: number,
	maxLength?: number,
	events?: Record<string, object>,
};

type MessageType = {
	text: string,
	itemClass?: string,
	mainClass?: string,
	mediaClass?: string,
	messageClass?: string,
	user?: AvatarType | Block<AvatarType>,
	avatar?: AvatarType | Block<AvatarType>,
};

type UserType = {
	name: string,
	caption: string,
	avatar: AvatarType | Block<AvatarType>,
};

type TabType = {
	user: UserType | Block<UserType>,
	time: string,
	tabClass?: string,
	userClass?: string,
	titleClass?: string,
	newCounter?: number,
};

type BtnType = {
	btnClass?: string,
	btnText: string,
};

export {
	AvatarType,
	PageType,
	FieldType,
	MessageType,
	UserType,
	TabType,
	BtnType,
};
