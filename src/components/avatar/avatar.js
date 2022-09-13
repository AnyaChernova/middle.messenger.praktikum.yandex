import Handlebars from "handlebars";
import {getTemplate} from "./avatar.tmpl";

export function registerAvatar() {
	Handlebars.registerPartial('avatar', getTemplate());
}
