import { Block } from '../../core/Block';
import { template } from './header.tmpl';
import { AvatarUser } from '../avatar/avatarUser';

export class Header extends Block<Indexed> {
	constructor() {
		super({ avatar: new AvatarUser() });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
