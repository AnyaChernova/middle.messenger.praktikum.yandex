import {template} from "./settingsPassword.tmpl";
import {fieldsPasswordData} from "./mocks";
import Field from "../../field/field";
import Button from "../../button/button";
import Form from "../../form/form";

const fieldsBlocks: Field[] = fieldsPasswordData.map((field) => new Field(field));
const buttonBlock = new Button({btnClass: 'w-full', btnText: 'Save'});

class SettingsPassword extends Form {
	constructor() {
		super({fields: fieldsBlocks, button: buttonBlock});
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default SettingsPassword;
