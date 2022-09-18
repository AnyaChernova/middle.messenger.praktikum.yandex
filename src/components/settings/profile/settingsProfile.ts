import Block from "../../../modules/Block";
import {template} from "./settingsProfile.tmpl";
import Field from "../../field/field";
import SettingsAvatarForm from "../avatar/settingsAvatarForm";
import Avatar from "../../avatar/avatar";
import {fieldsProfileData, avatarData} from "./mocks";

const fieldsBlocks: Field[] = fieldsProfileData.map((field) => new Field(field));
const avatarFormBlock = new SettingsAvatarForm({avatar: new Avatar(avatarData)});

class SettingsProfile extends Block {
	constructor() {
		super({fields: fieldsBlocks, avatarForm: avatarFormBlock});
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default SettingsProfile;
