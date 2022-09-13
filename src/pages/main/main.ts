import Handlebars from "handlebars";
import {pageType, avatarType} from "../../utils/types";
import {getTemplateMain} from "../../layouts/main.tmpl";
import {getTemplateChat} from "../../components/chat/chat.tmpl";

type tabType = {
	name: string,
	user: avatarType,
	text: string,
	time: string,
	tabClass?: string,
	newCounter?: number
}

type messageType = {
	text: string,
	itemClass?: string,
	mainClass?: string,
	mediaClass?: string,
	messageClass?: string,
	user?: avatarType
}

const pageData: pageType = {
	main: true,
	settings: false,
};

const avatarData: avatarType = {
	class: 'avatar--s',
	url: 'user1.jpg',
	size: 44
};

const tabs: tabType[] = [
	{
		name: 'Milie Nose',
		user: {
			class: 'avatar--m',
			url: 'user2.jpg',
			size: 50
		},
		text: 'Nice',
		time: '4:30 PM',
		newCounter: 7
	},
	{
		tabClass: 'chatTab--active',
		name: 'Killan James',
		user: {
			class: 'avatar--m',
			url: 'user1.jpg',
			size: 50
		},
		text: 'Hello! Everyone',
		time: '4:30 PM'
	},
	{
		name: 'Desian Tam Desian Tam Desian Tam Desian Tam',
		user: {
			class: 'avatar--m',
			url: 'avatar.jpg',
			size: 50
		},
		text: 'Wow really Cool 🔥',
		time: 'yesterday'
	}
];

const messages: messageType[] = [
	{
		itemClass: 'chatPanel__item--bottom',
		mainClass: 'media__main--left',
		text: 'Hi, I hope you are doing well, yesterday you have gave a pen. This very nice, i am very happy for this.yesterday you have gave a pen This very nice',
		user: {
			class: 'avatar--s',
			url: 'user1.jpg',
			size: 44
		}
	},
	{
		itemClass: 'chatPanel__item--bottomL',
		text: 'i am very happy for this.yesterday you have gave a pen This very nice',
	},
	{
		itemClass: 'chatPanel__item--right',
		mainClass: 'media__main--right',
		mediaClass: 'media--reverse',
		messageClass: 'message--reverse',
		text: 'Hi, I hope you are doing well, yesterday you have gave a pen. This very nice, i am very happy for this.yesterday you have gave a pen This very nice',
		user: {
			class: 'avatar--s',
			url: 'user1.jpg',
			size: 44
		}
	},
];

export function renderMainPage(): void {
	const mainPage: HTMLElement | null = document.querySelector('.page-main');
	if (mainPage) {
		const mainTemplate: any = Handlebars.compile(getTemplateMain());
		const chatTemplate: any = Handlebars.compile(getTemplateChat());
		const chatElem :HTMLElement | null = chatTemplate({user: avatarData, tabs, messages});
		mainPage.innerHTML = mainTemplate({
			page: pageData,
			body: chatElem,
			innerClass: 'content__inner--full'
		});
	}
}
