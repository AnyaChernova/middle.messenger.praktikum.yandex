import { FieldValidate } from '../../components/field/fieldValidate';
import { Auth } from '../../components/auth/auth';
import { FullLayout } from '../../layouts/full/full';
import { Button } from '../../components/button/button';
import { Link } from '../../components/link/link';
import { withStore } from '../../utils/withStore';
import { fieldsList } from './mocks';
import { login } from '../../services/auth';
import { Block } from '../../core/Block';

class LoginPageClass extends FullLayout {
	constructor(props: Indexed) {
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
		const authForm = new Auth({
			fields: fieldsBlocks,
			button: buttonBlock,
			link: linkBlock,
			isLogin: true,
		});

		authForm.onSubmit = () => {
			this.props.store.dispatch(login, authForm.formData);
		}

		super({ ...props, body: authForm });
	}
}

export const LoginPage = withStore(LoginPageClass as typeof Block);
