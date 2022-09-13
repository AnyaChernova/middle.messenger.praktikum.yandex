import Handlebars from "handlebars";
import {getTemplate} from "./field.tmpl";

export function registerField(): void {
	Handlebars.registerPartial('field', getTemplate());
}
