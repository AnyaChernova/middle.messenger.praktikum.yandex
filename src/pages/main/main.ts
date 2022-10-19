import { Chat } from '../../components/chat/chat';
import { MainLayout } from '../../layouts/main/main';
import { LinkType } from '../../utils/types';
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
		const chatBlock = new Chat();
		const links: Link[] = pages.map(item => new Link(item));

		super({ innerClass: 'content__inner--full', body: chatBlock, links });
	}
}
