import Block from "../../modules/Block";
import {template} from "./aside.tmpl";
import {pageType} from "../../utils/types";

class Aside extends Block {
	constructor(props: Record<string, pageType>) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default Aside;
