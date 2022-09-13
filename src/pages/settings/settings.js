import Handlebars from "handlebars";
import {getTemplateMain} from "../../layouts/main.tmpl";
import {getTemplateProfile} from "./settingsProfile.tmpl";
import {getTemplatePassword} from "./settingsPassword.tmpl";
import {getTemplateNav} from "./settingsNav.tmpl";
import {getTemplateAvatarForm} from "./settingsAvatarForm.tmpl";

const pageData = {
	main: false,
	settings: true,
	title: 'Settings',
};

const pageProfileData = {
	...pageData,
	profile: true,
	password: false,
};

const pagePasswordData = {
	...pageData,
	profile: false,
	password: true,
};

const fieldsProfileData = [
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

const fieldsPasswordData = [
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

const avatarData = {
	class: 'avatar--l',
	url: 'avatar.jpg',
	size: 64
};

const mainTemplate = Handlebars.compile(getTemplateMain());
const navTemplate = Handlebars.compile(getTemplateNav());

const renderSettingsProfile = () => {
	const settingsProfilePage = document.querySelector('.page-settings-profile');
	if (settingsProfilePage) {
		const settingsProfileTemplate = Handlebars.compile(getTemplateProfile());
		const avatarFormTemplate = Handlebars.compile(getTemplateAvatarForm());
		const avatarFormEl = avatarFormTemplate(avatarData);
		const settingsProfileElem = settingsProfileTemplate({fields: fieldsProfileData, avatarForm: avatarFormEl});
		const navElem = navTemplate({page: pageProfileData});
		settingsProfilePage.innerHTML = mainTemplate({
			page: pageProfileData,
			body: settingsProfileElem,
			nav: navElem
		});
	}
}

const renderSettingsPassword = () => {
	const settingsPasswordPage = document.querySelector('.page-settings-password');
	if (settingsPasswordPage) {
		const settingsPasswordTemplate = Handlebars.compile(getTemplatePassword());
		const settingsPasswordElem = settingsPasswordTemplate({fields: fieldsPasswordData});
		const navElem = navTemplate({page: pagePasswordData});
		settingsPasswordPage.innerHTML = mainTemplate({
			page: pagePasswordData,
			body: settingsPasswordElem,
			nav: navElem
		});
	}
}

export function renderSettingsPage() {
	renderSettingsProfile();
	renderSettingsPassword();
}
