import { FieldType } from '../../utils/types';

const fieldsClasses: FieldType = {
	fieldClass: 'formCard__field',
	labelClass: 'formCard__label',
};

export const loginFields: FieldType[] = [
	{
		...fieldsClasses,
		title: 'Login',
		name: 'login',
		type: 'text',
	},
	{
		...fieldsClasses,
		title: 'Password',
		name: 'password',
		type: 'password',
	},
];

export const registerFields: FieldType[] = [
	{
		...fieldsClasses,
		title: 'First Name',
		name: 'first_name',
		type: 'text',
	},
	{
		...fieldsClasses,
		title: 'Last Name',
		name: 'second_name',
		type: 'text',
	},
	{
		...fieldsClasses,
		title: 'Email',
		name: 'email',
		type: 'text',
	},
	{
		...fieldsClasses,
		title: 'Login',
		name: 'login',
		type: 'text',
	},
	{
		...fieldsClasses,
		title: 'Password',
		name: 'password',
		type: 'password',
	},
	{
		...fieldsClasses,
		title: 'Phone',
		name: 'phone',
		type: 'text',
	},
];
