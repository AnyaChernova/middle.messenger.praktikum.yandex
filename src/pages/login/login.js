import Handlebars from "handlebars";
import {getTemplateFull} from "../../layouts/full.tmpl";
import {getTemplateAuth} from "../../components/auth/auth.tmpl";

const fieldsData = [
	{
		name: 'Login',
		type: 'text'
	},
	{
		name: 'Password',
		type: 'password'
	},
];

export function renderLoginPage() {
	const loginPage = document.querySelector('.page-login');
	if (loginPage) {
		const loginTemplate = Handlebars.compile(getTemplateAuth());
		const mainTemplate = Handlebars.compile(getTemplateFull());
		const loginEl = loginTemplate({
			fields: fieldsData,
			isLogin: true
		});
		loginPage.innerHTML = mainTemplate({body: loginEl});
	}
}
