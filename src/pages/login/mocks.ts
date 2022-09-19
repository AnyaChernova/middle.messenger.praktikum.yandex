import { fieldType } from '../../utils/types';

const fieldsClasses: fieldType = {
	fieldClass: 'formCard__field',
	labelClass: 'formCard__label',
};

const fieldsList: fieldType[] = [
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

export { fieldsList };
