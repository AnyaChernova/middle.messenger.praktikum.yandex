import { login } from '../../services/auth';
import { AuthForm } from './authForm';
import { Link } from '../link/link';
import { Button } from '../button/button';
import { FieldValidate } from '../field/fieldValidate';
import { loginFields } from './fields';
import { store } from '../../core/Store';

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

	async onSubmit() {
		(this.children.button as Button).setLoading(true);
		await store.dispatch(login, this.formData);
		(this.children.button as Button).setLoading(false);
	}
}
