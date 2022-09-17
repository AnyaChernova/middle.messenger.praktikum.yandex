import Block from "../../modules/Block";
import {template} from "./user.tmpl";
import {userType} from "../../utils/types";

class User extends Block {
	constructor(props: userType) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default User;
