import Handlebars from "handlebars";
import {getTemplateDummy} from "./dummy.tmpl";

export function registerDummy(): void {
	Handlebars.registerPartial('dummy', getTemplateDummy());
}
