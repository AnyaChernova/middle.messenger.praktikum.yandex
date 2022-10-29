import { Form } from '../form/form';
import { Block } from '../../core/Block';
import { template } from './auth.tmpl';
import { FieldType, BtnType, LinkType } from '../../utils/types';

type AuthProps = {
	fields: Block<FieldType>[],
	button: Block<BtnType>,
	link: Block<LinkType>,
	isLogin: boolean,
	events?: Record<string, object>,
};

export class AuthForm extends Form {
	constructor(props: AuthProps) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
