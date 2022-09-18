import Block from "../../../modules/Block";
import {template} from "./settingsAvatarForm.tmpl";

class SettingsAvatarForm extends Block {
	constructor(props: {avatar: Block}) {
		super(props);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default SettingsAvatarForm;
