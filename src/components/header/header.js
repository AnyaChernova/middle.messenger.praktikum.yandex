import Handlebars from "handlebars";
import {getTemplate} from "./header.tmpl";

const avatarData = {
	url: 'avatar.jpg',
	size: 40
};

export function registerHeader() {
	const headerTemplate = Handlebars.compile(getTemplate());
	Handlebars.registerPartial('header', headerTemplate(avatarData));
}
