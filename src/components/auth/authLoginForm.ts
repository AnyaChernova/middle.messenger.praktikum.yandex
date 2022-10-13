import { login } from '../../services/auth';
import { AuthForm } from './authForm';
import { Link } from '../link/link';
import { Button } from '../button/button';
import { FieldValidate } from '../field/fieldValidate';
import { loginFields } from './fields';
import { Store } from '../../core/Store';

export class AuthLoginForm extends AuthForm {
	constructor() {
		const fieldsBlocks: FieldValidate[] = loginFields.map((field) => new FieldValidate(field));
		const buttonBlock = new Button({
			btnClass: 'w-full',
			btnText: 'Sign In',
		});
		const linkBlock = new Link({
			to: '/register',
			linkText: 'Sign up',
			linkClass: 'link',
		});

		super({
			fields: fieldsBlocks,
			button: buttonBlock,
			link: linkBlock,
			isLogin: true,
		});
	}

	onSubmit() {
		Store.dispatch(login, this.formData);
	}
}
