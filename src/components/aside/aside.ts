import Handlebars from "handlebars";
import {getTemplate} from "./aside.tmpl";

export function registerAside(): void {
	Handlebars.registerPartial('aside', getTemplate());
}
