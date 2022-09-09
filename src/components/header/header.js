import Handlebars from "handlebars";
import {getTemplate} from "./header.tmpl";

export function registerHeader() {
	const headerTemplate = Handlebars.compile(getTemplate());
	Handlebars.registerPartial('header', headerTemplate({url: 'avatar.jpg'}));
}
