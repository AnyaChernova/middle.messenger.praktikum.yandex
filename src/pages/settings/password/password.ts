import { MainLayout } from '../../../layouts/main/main';
import { SettingsNav } from '../../../components/settings/nav/settingsNav';
import { SettingsPassword } from '../../../components/settings/password/settingsPassword';
import { Link } from '../../../components/link/link';
import { LinkType } from '../../../utils/types';
import { NAV_CLASSES } from '../../../utils/consts';
import { pages } from '../pages';

const tabs: LinkType[] = [
	{
		to: '/settings',
		linkText: 'Profile',
		linkClass: NAV_CLASSES.ITEM_ACCENT,
	},
	{
		to: '/settings-password',
		linkText: 'Password',
		activeClass: NAV_CLASSES.ITEM_ACTIVE,
		linkClass: NAV_CLASSES.ITEM_ACCENT,
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
