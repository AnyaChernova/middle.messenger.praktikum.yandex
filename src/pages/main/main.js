import Handlebars from "handlebars";
import {getTemplateMain} from "../../layouts/main.tmpl";
import {getTemplateChat} from "../../components/chat/chat.tmpl";

const pageData = {
	main: true,
	settings: false,
};

const avatarData = {
	class: 'avatar--s',
	url: 'user1.jpg',
	size: 44
};

const tabs = [
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

const messages = [
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
		user: false
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

export function renderMainPage() {
	const mainPage = document.querySelector('.page-main');
	if (mainPage) {
		const mainTemplate = Handlebars.compile(getTemplateMain());
		const chatTemplate = Handlebars.compile(getTemplateChat());
		const chatElem = chatTemplate({user: avatarData, tabs, messages});
		mainPage.innerHTML = mainTemplate({
			page: pageData,
			body: chatElem,
			innerClass: 'content__inner--full'
		});
	}
}
