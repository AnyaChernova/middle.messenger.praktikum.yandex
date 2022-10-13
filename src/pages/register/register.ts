import { FieldValidate } from '../../components/field/fieldValidate';
import { Auth } from '../../components/auth/auth';
import { FullLayout } from '../../layouts/full/full';
import { Button } from '../../components/button/button';
import { Link } from '../../components/link/link';
import { register } from '../../services/auth';
import { fieldsList } from './mocks';
import { withStore } from '../../utils/withStore';
import { Block } from '../../core/Block';

export class RegisterPageClass extends FullLayout {
	constructor(props: Indexed) {
		const fieldsBlocks: FieldValidate[] = fieldsList.map((field) => new FieldValidate(field));
		const buttonBlock = new Button({ btnClass: 'w-full', btnText: 'Sign Up' });
		const linkBlock = new Link({
			to: '/login',
			linkText: 'Sign in',
			linkClass: 'link',
		});
		const authForm = new Auth({
			fields: fieldsBlocks,
			button: buttonBlock,
			link: linkBlock,
			isLogin: false,
		});

		authForm.onSubmit = () => {
			this.props.store.dispatch(register, authForm.formData);
		}

		super({ ...props, body: authForm });
	}
}

export const RegisterPage = withStore(RegisterPageClass as typeof Block);
