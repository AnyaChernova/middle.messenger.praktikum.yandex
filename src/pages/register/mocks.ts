import {fieldType} from "../../utils/types";

const fieldsClasses: fieldType = {
	inputClass: 'formCard__field',
	labelClass: 'formCard__label',
}

const fieldsList: fieldType[] = [
	{
		...fieldsClasses,
		name: 'First Name',
		type: 'text'
	},
	{
		...fieldsClasses,
		name: 'Last Name',
		type: 'text'
	},
	{
		...fieldsClasses,
		name: 'Email',
		type: 'email'
	},
	{
		...fieldsClasses,
		name: 'Login',
		type: 'text'
	},
	{
		...fieldsClasses,
		name: 'Password',
		type: 'password'
	},
	{
		...fieldsClasses,
		name: 'Phone',
		type: 'text'
	},
];

export {fieldsList};
