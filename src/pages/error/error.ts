import { Dummy } from '../../components/dummy/dummy';
import { LinkType } from '../../utils/types';
import { envelopeIcon } from '../../components/icons/envelope';
import { settingsIcon } from '../../components/icons/settings';
import { Link } from '../../components/link/link';
import { FullLayout } from '../../layouts/full/full';

const pages: LinkType[] = [
	{
		to: '/messages',
		linkText: 'Messages',
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

export class ErrorPage extends FullLayout {
	constructor() {
		const pageLinks: Link[] = pages.map(item => new Link(item));
		const errorBlock = new Dummy();

		super({ innerClass: 'content__inner--center', body: errorBlock, links: pageLinks });
	}
}
