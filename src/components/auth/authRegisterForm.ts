import { register } from '../../services/auth';
import { AuthForm } from './authForm';
import { Link } from '../link/link';
import { Button } from '../button/button';
import { FieldValidate } from '../field/fieldValidate';
import { registerFields } from './fields';
import { Store } from '../../core/Store';

export class AuthRegisterForm extends AuthForm {
	constructor() {
		const fieldsBlocks: FieldValidate[] = registerFields.map((field) => new FieldValidate(field));
		const buttonBlock = new Button({
			btnClass: 'w-full',
			btnText: 'Sign Up',
		});
		const linkBlock = new Link({
			to: '/',
			linkText: 'Sign in',
			linkClass: 'link',
		});

		super({
			fields: fieldsBlocks,
			button: buttonBlock,
			link: linkBlock,
			isLogin: false,
		});
	}

	async onSubmit() {
		(this.children.button as Button).setLoading(true);
		await Store.dispatch(register, this.formData);
		(this.children.button as Button).setLoading(false);
	}
}
