import { Block } from '../../core/Block';
import { template } from './user.tmpl';
import { UserType } from '../../utils/types';

export class User extends Block<UserType> {
	constructor(props: UserType) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
