import Handlebars from "handlebars";
import {getTemplate} from "./aside.tmpl";

export function registerAside() {
	Handlebars.registerPartial('aside', getTemplate());
}
