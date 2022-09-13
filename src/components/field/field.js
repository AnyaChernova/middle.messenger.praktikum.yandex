import Handlebars from "handlebars";
import {getTemplate} from "./field.tmpl";

export function registerField() {
	Handlebars.registerPartial('field', getTemplate());
}
