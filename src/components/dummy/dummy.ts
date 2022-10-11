import Block from '../../modules/Block';
import { template } from './dummy.tmpl';

type DummyProps = {
	code: string,
	title: string
};

export class Dummy extends Block<DummyProps> {
	constructor(props: DummyProps) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
