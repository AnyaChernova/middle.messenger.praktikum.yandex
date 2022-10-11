import { PageType } from '../../utils/types';

const pageData: PageType = {
	main: false,
	settings: true,
	title: 'Settings',
};

const pageProfileData: PageType = {
	...pageData,
	profile: true,
	password: false,
};

const pagePasswordData: PageType = {
	...pageData,
	profile: false,
	password: true,
};

export { pageProfileData, pagePasswordData };
