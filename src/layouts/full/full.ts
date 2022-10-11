import Block from '../../modules/Block';
import { template } from './full.tmpl';

type layoutProps = { body: Block<any> };

export class FullLayout extends Block<layoutProps> {
	constructor(props: layoutProps) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
