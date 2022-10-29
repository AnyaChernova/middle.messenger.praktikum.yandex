import { Chat } from '../../components/chat/chat';
import { MainLayout } from '../../layouts/main/main';
import { LinkType } from '../../utils/types';
import { Link } from '../../components/link/link';
import { envelopeIcon } from '../../components/icons/envelope';
import { settingsIcon } from '../../components/icons/settings';
import { NAV_CLASSES } from '../../utils/consts';

const pages: LinkType[] = [
	{
		to: '/messages',
		linkText: 'Messages',
		activeClass: NAV_CLASSES.ITEM_ACTIVE,
		linkIcon: envelopeIcon,
		linkClass: NAV_CLASSES.ITEM,
		linkIconClass: NAV_CLASSES.ICON,
	},
	{
		to: '/settings',
		linkText: 'Settings',
		linkIcon: settingsIcon,
		linkClass: NAV_CLASSES.ITEM,
		linkIconClass: NAV_CLASSES.ICON,
	},
];

export class MainPage extends MainLayout {
	constructor() {
		const chatBlock = new Chat();
		const links: Link[] = pages.map(item => new Link(item));

		super({ innerClass: 'content__inner--full', body: chatBlock, links });
	}
}
