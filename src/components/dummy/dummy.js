import Handlebars from "handlebars";
import {getTemplate} from "./dummy.tmpl";

export function registerAvatar() {
	Handlebars.registerPartial('avatar', getTemplate());
}
