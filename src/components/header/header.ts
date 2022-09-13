import Handlebars from "handlebars";
import {avatarType} from "../../utils/types";
import {getTemplate} from "./header.tmpl";

const avatarData: avatarType = {
	url: 'avatar.jpg',
	size: 40
};

export function registerHeader(): void {
	const headerTemplate: any = Handlebars.compile(getTemplate());
	Handlebars.registerPartial('header', headerTemplate(avatarData));
}
