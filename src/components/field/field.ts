import Block from "../../modules/Block";
import {template} from "./field.tmpl";
import {fieldType} from "../../utils/types";

class Field extends Block {
	constructor(props: fieldType) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default Field;
