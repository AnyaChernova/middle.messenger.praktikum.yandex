import Handlebars from "handlebars";
import {fieldType} from "../../utils/types";
import {getTemplateFull} from "../../layouts/full.tmpl";
import {getTemplateAuth} from "../../components/auth/auth.tmpl";

const fieldsClasses: fieldType = {
	inputClass: 'formCard__field',
	labelClass: 'formCard__label',
}

const fieldsData: fieldType[] = [
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

export function renderRegisterPage(): void {
	const registerPage: HTMLElement | null = document.querySelector('.page-register');
	if (registerPage) {
		const registerTemplate: any = Handlebars.compile(getTemplateAuth());
		const mainTemplate: any = Handlebars.compile(getTemplateFull());
		const registerEl: HTMLElement | null = registerTemplate({
			fields: fieldsData,
			isLogin: false
		});
		registerPage.innerHTML = mainTemplate({body: registerEl});
	}
}
