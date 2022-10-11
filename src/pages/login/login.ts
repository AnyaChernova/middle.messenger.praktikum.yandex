import { FieldValidate } from '../../components/field/fieldValidate';
import { Auth } from '../../components/auth/auth';
import { FullLayout } from '../../layouts/full/full';
import { Button } from '../../components/button/button';
import { Link } from '../../components/link/link';
import { fieldsList } from './mocks';

export class LoginPage extends FullLayout {
	constructor() {
		const fieldsBlocks: FieldValidate[] = fieldsList.map((field) => new FieldValidate(field));
		const buttonBlock = new Button({
			btnClass: 'w-full',
			btnText: 'Sign In',
		});
		const linkBlock = new Link({
			to: '/register',
			linkText: 'Sign up',
			linkClass: 'link',
		});
		const authBlock = new Auth({
			fields: fieldsBlocks,
			button: buttonBlock,
			link: linkBlock,
			isLogin: true,
		});

		super({ body: authBlock });
	}
}
