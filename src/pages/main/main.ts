import { avatarData, tabs, messages } from './mocks';
import { Avatar } from '../../components/avatar/avatar';
import { User } from '../../components/user/user';
import { Message } from '../../components/message/message';
import { MessageTab } from '../../components/messageTab/messageTab';
import { Chat } from '../../components/chat/chat';
import { MainLayout } from '../../layouts/main/main';
import { AvatarType, LinkType, UserType } from '../../utils/types';
import { Link } from '../../components/link/link';
import { envelopeIcon } from '../../components/icons/envelope';
import { settingsIcon } from '../../components/icons/settings';

const pages: LinkType[] = [
	{
		to: '/messages',
		linkText: 'Messages',
		activeClass: 'nav__item--active',
		linkIcon: envelopeIcon,
		linkClass: 'nav__item',
		linkIconClass: 'nav__icon',
	},
	{
		to: '/settings',
		linkText: 'Settings',
		linkIcon: settingsIcon,
		linkClass: 'nav__item',
		linkIconClass: 'nav__icon',
	},
];

export class MainPage extends MainLayout {
	constructor() {
		const userBlock = new User({ name: 'User name', caption: 'Active Now', avatar: new Avatar(avatarData) });
		const messagesList = messages.map((message) => new Message({
			...message,
			avatar: message.user ? new Avatar(message.user as AvatarType) : undefined,
		}));
		const tabsList = tabs.map((tab) => {
			let user: User | UserType = tab.user;
			if (!(tab.user instanceof User)) {
				const userData = { ...tab.user as UserType };
				user = new User({
					...userData,
					avatar: new Avatar(userData.avatar as AvatarType),
				});
			}
			return new MessageTab({ ...tab, user });
		});
		const chatBlock = new Chat({ user: userBlock, messages: messagesList, tabs: tabsList });
		const links: Link[] = pages.map(item => new Link(item));

		super({ innerClass: 'content__inner--full', body: chatBlock, links });
	}
}
