import { FieldValidate } from '../../field/fieldValidate';
import { Button } from '../../button/button';
import { Form } from '../../form/form';
import { template } from './settingsPassword.tmpl';
import { fieldsPasswordData } from './mocks';
import { updatePassword } from '../../../services/user';
import { Store } from '../../../core/Store';

export class SettingsPassword extends Form {
	constructor() {
		const fieldsBlocks: FieldValidate[] = fieldsPasswordData.map((field) => new FieldValidate(field));
		const buttonBlock = new Button({ btnClass: 'w-full', btnText: 'Save' });
		super({
			fields: fieldsBlocks,
			button: buttonBlock
		});
	}

	async onSubmit() {
		(this.children.button as Button).setLoading(true);
		await Store.dispatch(updatePassword, this.formData);
		(this.children.button as Button).setLoading(false);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
