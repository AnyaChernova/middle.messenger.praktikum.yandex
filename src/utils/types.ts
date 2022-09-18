import Block from "../modules/Block";
import User from "../components/user/user";

type avatarType = {
	class?: string,
	url: string,
	size: number
}

type pageType = {
	main?: boolean,
	settings?: boolean,
	profile?: boolean,
	password?: boolean,
	title?: string
}

type fieldType = {
	fieldClass?: string,
	inputClass?: string,
	labelClass?: string,
	name?: string,
	title?: string,
	type?: string,
}

type messageType = {
	text: string,
	itemClass?: string,
	mainClass?: string,
	mediaClass?: string,
	messageClass?: string,
	user?: avatarType | Block,
	avatar?: avatarType | Block,
}

type userType = {
	name: string,
	caption: string,
	avatar: avatarType | Block
}

type tabType = {
	user: userType | User,
	time: string,
	tabClass?: string,
	userClass?: string,
	titleClass?: string,
	newCounter?: number
}

export {avatarType, pageType, fieldType, messageType, userType, tabType};
