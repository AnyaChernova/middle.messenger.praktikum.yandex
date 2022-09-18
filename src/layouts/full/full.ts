import Block from "../../modules/Block";
import {template} from "./full.tmpl";

class FullLayout extends Block {
	constructor(props: {body: Block}) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default FullLayout;

