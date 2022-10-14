import { Block } from '../../core/Block';
import { template } from './header.tmpl';

export class Header extends Block<Indexed> {
	constructor(props: Indexed) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
