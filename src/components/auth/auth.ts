import Block from "../../modules/Block";
import {template} from "./auth.tmpl";

class Auth extends Block {
	constructor(props: Record<string, boolean | Block[]>) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default Auth;
