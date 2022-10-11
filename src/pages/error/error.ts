import { MainLayout } from '../../layouts/main/main';
import { Dummy } from '../../components/dummy/dummy';
import { errorData } from './mocks';
import { LinkType } from '../../utils/types';
import { envelopeIcon } from '../../components/icons/envelope';
import { settingsIcon } from '../../components/icons/settings';
import { Link } from '../../components/link/link';

const pages: LinkType[] = [
	{
		to: '/',
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

export class ErrorPage extends MainLayout {
	constructor() {
		const pageLinks: Link[] = pages.map(item => new Link(item));
		const errorBlock = new Dummy(errorData);

		super({ innerClass: 'content__inner--center', body: errorBlock, links: pageLinks });
	}
}
