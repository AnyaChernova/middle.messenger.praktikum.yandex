import { FieldValidate } from '../../field/fieldValidate';
import { SettingsAvatarForm } from '../avatar/settingsAvatarForm';
import { Avatar } from '../../avatar/avatar';
import { Button } from '../../button/button';
import { Form } from '../../form/form';
import { template } from './settingsProfile.tmpl';
import { fieldsProfileData, avatarData } from './mocks';

const fieldsBlocks: FieldValidate[] = fieldsProfileData.map((field) => new FieldValidate(field));
const avatarFormBlock = new SettingsAvatarForm({ avatar: new Avatar(avatarData) });
const buttonBlock = new Button({ btnClass: 'w-full', btnText: 'Save' });

export class SettingsProfile extends Form {
	constructor() {
		super({
			fields: fieldsBlocks,
			avatarForm: avatarFormBlock,
			button: buttonBlock,
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
