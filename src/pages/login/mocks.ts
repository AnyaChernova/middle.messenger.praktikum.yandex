import { FieldType } from '../../utils/types';

const fieldsClasses: FieldType = {
	fieldClass: 'formCard__field',
	labelClass: 'formCard__label',
};

const fieldsList: FieldType[] = [
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
