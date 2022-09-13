import Handlebars from "handlebars";
import {getTemplateAvatar} from "./avatar.tmpl";

export function registerAvatar(): void {
	Handlebars.registerPartial('avatar', getTemplateAvatar());
}
