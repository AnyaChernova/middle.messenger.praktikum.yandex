import { Form } from '../form/form';
import Block from '../../modules/Block';
import { template } from './auth.tmpl';
import { FieldType, BtnType } from '../../utils/types';

type AuthProps = {
	fields: Block<FieldType>[],
	button: Block<BtnType>,
	isLogin: boolean,
};

export class Auth extends Form {
	constructor(props: AuthProps) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
