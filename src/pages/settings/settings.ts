import Handlebars from "handlebars";
import {pageType, fieldType, avatarType} from "../../utils/types";
import {getTemplateMain} from "../../layouts/main/main.tmpl";
import {getTemplateProfile} from "./settingsProfile.tmpl";
import {getTemplatePassword} from "./settingsPassword.tmpl";
import {getTemplateNav} from "./settingsNav.tmpl";
import {getTemplateAvatarForm} from "./settingsAvatarForm.tmpl";

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

const fieldsProfileData: fieldType[] = [
	{
		name: 'First Name',
		type: 'text'
	},
	{
		name: 'Last Name',
		type: 'text'
	},
	{
		name: 'Display Name',
		type: 'text'
	},
	{
		name: 'Login',
		type: 'text'
	},
	{
		name: 'Email',
		type: 'email'
	},
	{
		name: 'Phone',
		type: 'text'
	},
];

const fieldsPasswordData: fieldType[] = [
	{
		name: 'Old password',
		type: 'password'
	},
	{
		name: 'New password',
		type: 'password'
	},
	{
		name: 'Repeat password',
		type: 'password'
	},
];

const avatarData: avatarType = {
	class: 'avatar--l',
	url: 'avatar.jpg',
	size: 64
};

const mainTemplate: any = Handlebars.compile(getTemplateMain());
const navTemplate: any = Handlebars.compile(getTemplateNav());

const renderSettingsProfile = (): void => {
	const settingsProfilePage: HTMLElement | null = document.querySelector('.page-settings-profile');
	if (settingsProfilePage) {
		const settingsProfileTemplate: any = Handlebars.compile(getTemplateProfile());
		const avatarFormTemplate: any = Handlebars.compile(getTemplateAvatarForm());
		const avatarFormEl: HTMLElement | null = avatarFormTemplate(avatarData);
		const settingsProfileElem: HTMLElement | null = settingsProfileTemplate({fields: fieldsProfileData, avatarForm: avatarFormEl});
		const navElem: HTMLElement | null = navTemplate({page: pageProfileData});
		settingsProfilePage.innerHTML = mainTemplate({
			page: pageProfileData,
			body: settingsProfileElem,
			nav: navElem
		});
	}
}

const renderSettingsPassword = (): void => {
	const settingsPasswordPage: HTMLElement | null = document.querySelector('.page-settings-password');
	if (settingsPasswordPage) {
		const settingsPasswordTemplate: any = Handlebars.compile(getTemplatePassword());
		const settingsPasswordElem: HTMLElement | null = settingsPasswordTemplate({fields: fieldsPasswordData});
		const navElem: HTMLElement | null = navTemplate({page: pagePasswordData});
		settingsPasswordPage.innerHTML = mainTemplate({
			page: pagePasswordData,
			body: settingsPasswordElem,
			nav: navElem
		});
	}
}

export function renderSettingsPage(): void {
	renderSettingsProfile();
	renderSettingsPassword();
}
