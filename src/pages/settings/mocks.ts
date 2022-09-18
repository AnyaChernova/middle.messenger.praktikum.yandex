import {pageType} from "../../utils/types";

const pageData: pageType = {
	main: false,
	settings: true,
	title: 'Settings',
};

const pageProfileData: pageType = {
	...pageData,
	profile: true,
	password: false,
};

const pagePasswordData: pageType = {
	...pageData,
	profile: false,
	password: true,
};

export {pageProfileData, pagePasswordData};
