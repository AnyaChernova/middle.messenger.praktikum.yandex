import Handlebars from "handlebars";
import mainPage from "./pages/main/main";

Handlebars.registerHelper("if", function(this: any, conditional, options) {
	if (conditional) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

const page: HTMLElement | null = document.querySelector('.page-main');
page!.append(mainPage.getContent());

