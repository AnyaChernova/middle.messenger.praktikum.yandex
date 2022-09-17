import Handlebars from "handlebars";
import {getTemplateMain} from "../../layouts/main/main.tmpl";
import {getTemplateDummy} from "../../components/dummy/dummy.tmpl";

const errorData: {
	code: string,
	title: string
} = {
	code: '505',
	title: 'Ooops... Something went wrong '
};

export function renderErrorPage(): void {
	const errorPage: HTMLElement | null = document.querySelector('.page-error');
	if (errorPage) {
		const mainTemplate: any = Handlebars.compile(getTemplateMain());
		const errorTemplate: any = Handlebars.compile(getTemplateDummy());
		const errorEl: HTMLElement | null = errorTemplate(errorData);
		errorPage.innerHTML = mainTemplate({body: errorEl, innerClass: 'content__inner--center'});
	}
}
