import {avatarType, fieldType} from "../../../utils/types";

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

const avatarData: avatarType = {
	class: 'avatar--l',
	url: 'avatar.jpg',
	size: 64
};

export {fieldsProfileData, avatarData};
