import Block from "../../modules/Block";
import {template} from "./dummy.tmpl";

class Dummy extends Block {
	constructor(props: {
		code: string,
		title: string
	}) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default Dummy;
