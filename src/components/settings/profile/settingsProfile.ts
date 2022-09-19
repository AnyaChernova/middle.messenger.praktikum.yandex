import {template} from "./settingsProfile.tmpl";
import {fieldsProfileData, avatarData} from "./mocks";
import Field from "../../field/field";
import SettingsAvatarForm from "../avatar/settingsAvatarForm";
import Avatar from "../../avatar/avatar";
import Button from "../../button/button";
import Form from "../../form/form";

const fieldsBlocks: Field[] = fieldsProfileData.map((field) => new Field(field));
const avatarFormBlock = new SettingsAvatarForm({avatar: new Avatar(avatarData)});
const buttonBlock = new Button({btnClass: 'w-full', btnText: 'Save'});

class SettingsProfile extends Form {
	constructor() {
		super({
			fields: fieldsBlocks,
			avatarForm: avatarFormBlock,
			button: buttonBlock
		});
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default SettingsProfile;
