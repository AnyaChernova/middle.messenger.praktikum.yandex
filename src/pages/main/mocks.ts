import {
	PageType,
	AvatarType,
	MessageType,
	TabType,
} from '../../utils/types';

const pageData: PageType = {
	main: true,
	settings: false,
};
const avatarData: AvatarType = {
	class: 'avatar--s',
	url: 'user1.jpg',
	size: 44,
};
const avatarHeaderData: AvatarType = {
	url: 'avatar.jpg',
	size: 40,
};
const tabs: TabType[] = [
	{
		userClass: 'chatTab__media',
		titleClass: 'media__title--l',
		user: {
			name: 'Milie Nose',
			caption: 'Nice',
			avatar: {
				class: 'avatar--m',
				url: 'user2.jpg',
				size: 50,
			},
		},
		time: '4:30 PM',
		newCounter: 7,
	},
	{
		tabClass: 'chatTab--active',
		userClass: 'chatTab__media',
		titleClass: 'media__title--l',
		user: {
			name: 'Killan James',
			caption: 'Hello! Everyone',
			avatar: {
				class: 'avatar--m',
				url: 'user1.jpg',
				size: 50,
			},
		},
		time: '4:30 PM',
	},
	{
		userClass: 'chatTab__media',
		titleClass: 'media__title--l',
		user: {
			name: 'Desian Tam Desian Tam Desian Tam Desian Tam',
			caption: 'Wow really Cool 🔥',
			avatar: {
				class: 'avatar--m',
				url: 'avatar.jpg',
				size: 50,
			},
		},
		time: 'yesterday',
	},
];
const messages: MessageType[] = [
	{
		itemClass: 'chatPanel__item--bottom',
		mainClass: 'media__main--left',
		text: 'Hi, I hope you are doing well, yesterday you have gave a pen. This very nice, i am very happy for this.yesterday you have gave a pen This very nice',
		user: {
			class: 'avatar--s',
			url: 'user1.jpg',
			size: 44,
		},
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
			size: 44,
		},
	},
];

export {
	pageData,
	avatarData,
	avatarHeaderData,
	tabs,
	messages,
};
