import { Block } from '../../core/Block';
import { template } from './header.tmpl';
import { Avatar } from '../avatar/avatar';

type HeaderProps = {
	avatar: Avatar
};

export class Header extends Block<HeaderProps> {
	constructor(props: HeaderProps) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
