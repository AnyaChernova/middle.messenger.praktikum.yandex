import {avatarType, fieldType} from "../../../utils/types";

const fieldsProfileData: fieldType[] = [
	{
		title: 'First Name',
		name: 'first_name',
		type: 'text'
	},
	{
		title: 'Last Name',
		name: 'second_name',
		type: 'text'
	},
	{
		title: 'Login',
		name: 'login',
		type: 'text'
	},
	{
		title: 'Email',
		name: 'email',
		type: 'email'
	},
	{
		title: 'Phone',
		name: 'phone',
		type: 'text'
	},
];

const avatarData: avatarType = {
	class: 'avatar--l',
	url: 'avatar.jpg',
	size: 64
};

export {fieldsProfileData, avatarData};
