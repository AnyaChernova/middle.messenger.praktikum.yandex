import Block from "../../modules/Block";
import {template} from "./main.tmpl";

class MainLayout extends Block {
	constructor(props: Record<string, string | Block>) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default MainLayout;

