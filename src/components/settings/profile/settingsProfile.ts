import { FieldValidate } from '../../field/fieldValidate';
import { SettingsAvatarForm } from '../avatar/settingsAvatarForm';
import { Avatar } from '../../avatar/avatar';
import { Button } from '../../button/button';
import { Form } from '../../form/form';
import { template } from './settingsProfile.tmpl';
import { fieldsProfileData, avatarData } from './mocks';
import { withStore } from '../../../utils/withStore';
import { updateProfile } from '../../../services/user';
import { Store } from '../../../core/Store';

export class SettingsProfileClass extends Form {
	constructor(props: Indexed) {
		const fieldsBlocks: FieldValidate[] = fieldsProfileData.map((field) => new FieldValidate(field));
		const avatarFormBlock = new SettingsAvatarForm({ avatar: new Avatar(avatarData) });
		const buttonBlock = new Button({ btnClass: 'w-full', btnText: 'Save' });
		super({
			...props,
			fields: fieldsBlocks,
			avatarForm: avatarFormBlock,
			button: buttonBlock,
		});
	}

	onSubmit() {
		Store.dispatch(updateProfile, this.formData);
	}

	render() {
		return this.compile(template, { ...this.props });
	}

	componentDidMount() {
		if (this.props.user) {
			const fields = this.children.fields as FieldValidate[];
			fields.forEach((field) => {
				field.setProps({
					value: this.props.user[field.uniqueName!]
				});
			});
		}
	}
}

export const SettingsProfile = withStore(SettingsProfileClass, (state) => {
	return {
		user: state.user,
	};
});
