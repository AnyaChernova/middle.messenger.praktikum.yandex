import Form from '../form/form';
import Block from '../../modules/Block';
import { template } from './auth.tmpl';

class Auth extends Form {
	constructor(props: Record<string, boolean | Block | Block[]>) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export default Auth;
