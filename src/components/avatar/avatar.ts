import Block from "../../modules/Block";
import {avatarType} from "../../utils/types";
import {template} from "./avatar.tmpl";

class Avatar extends Block {
	constructor(props: avatarType) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default Avatar;
