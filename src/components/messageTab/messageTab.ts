import Block from "../../modules/Block";
import {template} from "./messageTab.tmpl";
import {tabType} from "../../utils/types";

class MessageTab extends Block {
	constructor(props: tabType) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default MessageTab;
