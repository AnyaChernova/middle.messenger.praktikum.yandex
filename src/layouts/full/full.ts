import { Block } from '../../core/Block';
import { Notice } from '../../components/notice/notice';
import { template } from './full.tmpl';

export class FullLayout extends Block<Indexed> {
	constructor(props: Indexed) {
		super({ ...props, notice: new Notice() });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
