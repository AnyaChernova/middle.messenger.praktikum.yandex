import Block from "../../../modules/Block";
import {template} from "./settingsPassword.tmpl";
import {fieldsPasswordData} from "./mocks";
import Field from "../../field/field";

const fieldsBlocks: Field[] = fieldsPasswordData.map((field) => new Field(field));

class SettingsPassword extends Block {
	constructor() {
		super({fields: fieldsBlocks});
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default SettingsPassword;
