import Block from '../../modules/Block';
import { template } from './header.tmpl';

class Header extends Block {
	constructor(props: Record<string, Block>) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export default Header;
