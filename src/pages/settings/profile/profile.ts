import { MainLayout } from '../../../layouts/main/main';
import { SettingsNav } from '../../../components/settings/nav/settingsNav';
import { SettingsProfile } from '../../../components/settings/profile/settingsProfile';
import { LinkType } from '../../../utils/types';
import { Link } from '../../../components/link/link';
import { NAV_CLASSES } from '../../../utils/consts';
import { pages } from '../pages';

const tabs: LinkType[] = [
	{
		to: '/settings',
		linkText: 'Profile',
		activeClass: NAV_CLASSES.ITEM_ACTIVE,
		linkClass: NAV_CLASSES.ITEM_ACCENT,
	},
	{
		to: '/settings-password',
		linkText: 'Password',
		linkClass: NAV_CLASSES.ITEM_ACCENT,
	},
];

export class ProfilePage extends MainLayout {
	constructor() {
		const tabLinks: Link[] = tabs.map(item => new Link(item));
		const pageLinks: Link[] = pages.map(item => new Link(item));
		const navBlock = new SettingsNav({ links: tabLinks });
		const profileBlock = new SettingsProfile();

		super({
			title: 'Settings',
			body: profileBlock,
			nav: navBlock,
			links: pageLinks,
		});
	}
}
