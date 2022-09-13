import Handlebars from "handlebars";
import {getTemplateMain} from "../../layouts/main.tmpl";
import {getTemplateDummy} from "../../components/dummy/dummy.tmpl";

const errorData = {
	code: '505',
	title: 'Ooops... Something went wrong '
};

export function renderErrorPage() {
	const errorPage = document.querySelector('.page-error');
	if (errorPage) {
		const mainTemplate = Handlebars.compile(getTemplateMain());
		const errorTemplate = Handlebars.compile(getTemplateDummy());
		const errorEl = errorTemplate(errorData);
		errorPage.innerHTML = mainTemplate({body: errorEl, innerClass: 'content__inner--center'});
	}
}
