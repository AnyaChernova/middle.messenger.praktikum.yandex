import {template} from "./auth.tmpl";
import Form from "../form/form";
import Block from "../../modules/Block";

class Auth extends Form {
	constructor(props: Record<string, boolean | Block | Block[]>) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default Auth;
