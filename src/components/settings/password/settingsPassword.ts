import { FieldValidate } from '../../field/fieldValidate';
import { Button } from '../../button/button';
import { Form } from '../../form/form';
import { template } from './settingsPassword.tmpl';
import { fieldsPasswordData } from './mocks';
import { updatePassword } from '../../../services/user';

export class SettingsPassword extends Form {
	constructor() {
		const fieldsBlocks: FieldValidate[] = fieldsPasswordData.map((field) => new FieldValidate(field));
		const buttonBlock = new Button({ btnClass: 'w-full', btnText: 'Save' });
		super({
			fields: fieldsBlocks,
			button: buttonBlock
		});
	}

	onSubmit() {
		this.props.store.dispatch(updatePassword, this.formData);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
