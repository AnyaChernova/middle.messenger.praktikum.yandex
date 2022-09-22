import Block from '../../modules/Block';
import { template } from './aside.tmpl';
import { PageType } from '../../utils/types';

type AsideProps = { page: PageType };

export class Aside extends Block<AsideProps> {
	constructor(props: AsideProps) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
