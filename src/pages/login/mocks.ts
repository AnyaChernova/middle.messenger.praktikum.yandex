import {fieldType} from "../../utils/types";

const fieldsClasses: fieldType = {
	inputClass: 'formCard__field',
	labelClass: 'formCard__label',
}

const fieldsList: fieldType[] = [
	{
		...fieldsClasses,
		name: 'Login',
		type: 'text',
	},
	{
		...fieldsClasses,
		name: 'Password',
		type: 'password'
	},
];

export {fieldsList};
