import Handlebars from "handlebars";
import {getTemplateFull} from "../../layouts/full.tmpl";
import {getTemplateAuth} from "../../components/auth/auth.tmpl";

const fieldsData = [
	{
		name: 'First Name',
		type: 'text'
	},
	{
		name: 'Last Name',
		type: 'text'
	},
	{
		name: 'Email',
		type: 'email'
	},
	{
		name: 'Login',
		type: 'text'
	},
	{
		name: 'Password',
		type: 'password'
	},
	{
		name: 'Phone',
		type: 'text'
	},
];

export function renderRegisterPage() {
	const registerPage = document.querySelector('.page-register');
	if (registerPage) {
		const registerTemplate = Handlebars.compile(getTemplateAuth());
		const mainTemplate = Handlebars.compile(getTemplateFull());
		const registerEl = registerTemplate({
			fields: fieldsData,
			isLogin: false
		});
		registerPage.innerHTML = mainTemplate({body: registerEl});
	}
}
