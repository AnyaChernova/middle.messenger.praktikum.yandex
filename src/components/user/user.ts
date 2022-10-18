import { Block } from '../../core/Block';
import { template } from './user.tmpl';
import { UserMediaType } from '../../utils/types';

export class User extends Block<UserMediaType> {
	constructor(props: UserMediaType) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
