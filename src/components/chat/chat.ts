import Block from "../../modules/Block";
import ChatField from "../chatField/chatField";
import {template} from "./chat.tmpl";

class Chat extends Block {
	constructor(props: Record<string, Block | Block[]>) {
		super({
			...props,
			field: new ChatField({name: 'message', type: 'text'})
		});
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default Chat;
