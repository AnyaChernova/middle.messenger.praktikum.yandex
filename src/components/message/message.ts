import Handlebars from "handlebars";
import {getTemplateMessage} from "./message.tmpl";
import {getTemplateMessageTab} from "./messageTab.tmpl";

export function registerMessage(): void {
	Handlebars.registerPartial('message', getTemplateMessage());
}

export function registerMessageTab(): void {
	Handlebars.registerPartial('messageTab', getTemplateMessageTab());
}
