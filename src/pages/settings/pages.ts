import { LinkType } from '../../utils/types';
import { NAV_CLASSES } from '../../utils/consts';
import { envelopeIcon } from '../../components/icons/envelope';
import { settingsIcon } from '../../components/icons/settings';

export const pages: LinkType[] = [
	{
		to: '/messages',
		linkText: 'Messages',
		linkIcon: envelopeIcon,
		linkClass: NAV_CLASSES.ITEM,
		linkIconClass: NAV_CLASSES.ICON,
	},
	{
		to: '/settings',
		linkText: 'Settings',
		activeClass: NAV_CLASSES.ITEM_ACTIVE,
		linkIcon: settingsIcon,
		linkClass: NAV_CLASSES.ITEM,
		linkIconClass: NAV_CLASSES.ICON,
	},
];
