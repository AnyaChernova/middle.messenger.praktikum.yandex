import Block from "../../modules/Block";
import {template} from "./button.tmpl";

class Button extends Block {
	constructor(props: {btnClass?: string, btnText: string}) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default Button;
