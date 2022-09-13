import Handlebars from "handlebars";
import {getTemplateMessage} from "./message.tmpl";
import {getTemplateMessageTab} from "./messageTab.tmpl";

export function registerMessage() {
	Handlebars.registerPartial('message', getTemplateMessage());
}

export function registerMessageTab() {
	Handlebars.registerPartial('messageTab', getTemplateMessageTab());
}
