import { FieldValidate } from '../../field/fieldValidate';
import { Button } from '../../button/button';
import { Form } from '../../form/form';
import { template } from './settingsPassword.tmpl';
import { fieldsPasswordData } from './mocks';

const fieldsBlocks: FieldValidate[] = fieldsPasswordData.map((field) => new FieldValidate(field));
const buttonBlock = new Button({ btnClass: 'w-full', btnText: 'Save' });

export class SettingsPassword extends Form {
	constructor() {
		super({ fields: fieldsBlocks, button: buttonBlock });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
