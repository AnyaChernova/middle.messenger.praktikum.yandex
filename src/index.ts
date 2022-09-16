import Block from "./modules/Block";
import {avatarType} from "./utils/types";
import {getTemplateAvatar} from "./components/avatar/avatar.tmpl";
import {getTemplateHeader} from "./components/header/header.tmpl";

// Handlebars.registerHelper("if", function(this: any, conditional, options) {
// 	if (conditional) {
// 		return options.fn(this);
// 	} else {
// 		return options.inverse(this);
// 	}
// });


const avatarData: avatarType = {
	url: 'avatar.jpg',
	size: 40
};

class Avatar extends Block {
	constructor(props: avatarType) {
		super(props);
	}

	render() {
		return this.compile(getTemplateAvatar(), {...this.props});
	}
}

class Header extends Block {
	constructor(props: Record<string, Block>) {
		super(props);
	}

	render() {
		return this.compile(getTemplateHeader(), {...this.props});
	}
}

const avatar =  new Avatar(avatarData);
const header = new Header({avatar: avatar});

const page: HTMLElement | null = document.querySelector('.page');
page!.append(header.getContent());

setTimeout(() => {
	avatar.setProps({
		class: 'avatar--l',
		url: 'user1.jpg',
		size: 60
	});
}, 2000)
