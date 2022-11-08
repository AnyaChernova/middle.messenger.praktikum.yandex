import { FieldValidate } from '../../field/fieldValidate';
import { SettingsAvatarForm } from '../avatar/settingsAvatarForm';
import { Button } from '../../button/button';
import { Form } from '../../form/form';
import { template } from './settingsProfile.tmpl';
import { fieldsProfileData } from './fields';
import { withStore } from '../../../utils/withStore';
import { updateProfile } from '../../../services/user';
import { store } from '../../../core/Store';
import { AvatarUser } from '../../avatar/avatarUser';

export class SettingsProfileClass extends Form {
	constructor(props: Indexed) {
		const fieldsBlocks: FieldValidate[] = fieldsProfileData
			.map((field) => new FieldValidate(field));
		const avatarFormBlock = new SettingsAvatarForm({
			avatar: new AvatarUser({
				class: 'avatar--l',
				url: require('/static/avatar.svg'),
				size: 64,
			}),
		});
		const buttonBlock = new Button({ btnClass: 'w-full', btnText: 'Save' });
		super({
			...props,
			fields: fieldsBlocks,
			avatarForm: avatarFormBlock,
			button: buttonBlock,
		});
	}

	async onSubmit() {
		(this.children.button as Button).setLoading(true);
		await store.dispatch(updateProfile, this.formData);
		(this.children.button as Button).setLoading(false);
	}

	render() {
		return this.compile(template, { ...this.props });
	}

	componentDidMount() {
		if (this.props.user) {
			const fields = this.children.fields as FieldValidate[];
			fields.forEach((field) => field.setValue(this.props.user[field.uniqueName!]));
		}
	}
}

export const SettingsProfile = withStore(SettingsProfileClass, (state) => ({
	user: state.user,
}));
