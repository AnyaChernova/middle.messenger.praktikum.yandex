import { MainLayout } from '../../../layouts/main/main';
import { SettingsNav } from '../../../components/settings/nav/settingsNav';
import { SettingsPassword } from '../../../components/settings/password/settingsPassword';
import { LinkType } from '../../../utils/types';
import { Link } from '../../../components/link/link';
import { envelopeIcon } from '../../../components/icons/envelope';
import { settingsIcon } from '../../../components/icons/settings';

const tabs: LinkType[] = [
	{
		to: '/settings',
		linkText: 'Profile',
		linkClass: 'nav__item navRow__item nav__item--accent',
	},
	{
		to: '/settings-password',
		linkText: 'Password',
		activeClass: 'nav__item--active',
		linkClass: 'nav__item navRow__item nav__item--accent',
	},
];

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
		activeClass: 'nav__item--active',
		linkIcon: settingsIcon,
		linkClass: 'nav__item',
		linkIconClass: 'nav__icon',
	},
];

export class PasswordPage extends MainLayout {
	constructor() {
		const tabLinks: Link[] = tabs.map(item => new Link(item));
		const pageLinks: Link[] = pages.map(item => new Link(item));
		const navBlock = new SettingsNav({ links: tabLinks });
		const passwordBlock = new SettingsPassword();

		super({
			title: 'Settings',
			body: passwordBlock,
			nav: navBlock,
			links: pageLinks,
		});
	}
}
