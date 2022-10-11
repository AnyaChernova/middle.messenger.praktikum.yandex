import Block from '../../modules/Block';
import { template } from './aside.tmpl';
import { LinkType } from '../../utils/types';

type AsideProps = { links?: Block<LinkType>[] };

export class Aside extends Block<AsideProps> {
	constructor(props: AsideProps) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}

	componentDidMount() {
		this.init();
	}
}
