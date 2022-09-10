import Handlebars from "handlebars";
import {getTemplateFull} from "../../layouts/full.tmpl";
import {getTemplateAuth} from "../../components/auth/auth.tmpl";

const fieldsClasses = {
	inputClass: 'formCard__field',
	labelClass: 'formCard__label',
}

const fieldsData = [
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
