import Block from "../../modules/Block";
import {template} from "./chat.tmpl";

class Chat extends Block {
	constructor(props: Record<string, Block | Block[]>) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default Chat;
