import Handlebars from "handlebars";
import {getTemplateMain} from "../../layouts/main.tmpl";

const pageData = {
	main: true,
	settings: false,
	title: 'Messages',
}

export function renderMainPage() {
	const mainPage = document.querySelector('.page-main');
	if (mainPage) {
		const mainTemplate = Handlebars.compile(getTemplateMain());
		mainPage.innerHTML = mainTemplate({page: pageData});
	}
}
