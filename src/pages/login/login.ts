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
		name: 'Login',
		type: 'text',
	},
	{
		...fieldsClasses,
		name: 'Password',
		type: 'password'
	},
];

export function renderLoginPage(): void {
	const loginPage: HTMLElement | null = document.querySelector('.page-login');
	if (loginPage) {
		const loginTemplate: any = Handlebars.compile(getTemplateAuth());
		const mainTemplate: any = Handlebars.compile(getTemplateFull());
		const loginEl: HTMLElement | null = loginTemplate({
			fields: fieldsData,
			isLogin: true
		});
		loginPage.innerHTML = mainTemplate({body: loginEl});
	}
}
