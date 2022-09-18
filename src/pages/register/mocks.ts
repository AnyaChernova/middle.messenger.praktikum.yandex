import {fieldType} from "../../utils/types";

const fieldsClasses: fieldType = {
	fieldClass: 'formCard__field',
	labelClass: 'formCard__label',
}

const fieldsList: fieldType[] = [
	{
		...fieldsClasses,
		title: 'First Name',
		name: 'first_name',
		type: 'text'
	},
	{
		...fieldsClasses,
		title: 'second_name',
		name: 'Last Name',
		type: 'text'
	},
	{
		...fieldsClasses,
		title: 'Email',
		name: 'email',
		type: 'email'
	},
	{
		...fieldsClasses,
		title: 'Login',
		name: 'login',
		type: 'text'
	},
	{
		...fieldsClasses,
		title: 'Password',
		name: 'password',
		type: 'password'
	},
	{
		...fieldsClasses,
		title: 'Phone',
		name: 'phone',
		type: 'text'
	},
];

export {fieldsList};
