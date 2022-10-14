import { AvatarType, FieldType } from '../../../utils/types';

const fieldsProfileData: FieldType[] = [
	{
		title: 'First Name',
		name: 'first_name',
		id: 'firstName',
		type: 'text',
	},
	{
		title: 'Last Name',
		name: 'second_name',
		id: 'secondName',
		type: 'text',
	},
	{
		title: 'Display Name',
		name: 'display_name',
		id: 'displayName',
		type: 'text',
	},
	{
		title: 'Login',
		name: 'login',
		id: 'login',
		type: 'text',
	},
	{
		title: 'Email',
		name: 'email',
		id: 'email',
		type: 'text',
	},
	{
		title: 'Phone',
		name: 'phone',
		id: 'phone',
		type: 'text',
	},
];

const avatarData: AvatarType = {
	class: 'avatar--l',
	url: 'avatar.svg',
	size: 64,
};

export { fieldsProfileData, avatarData };
