import { Block } from '../../core/Block';
import { Notice } from '../../components/notice/notice';
import { template } from './full.tmpl';

export class FullLayout extends Block<Indexed> {
	constructor(props: Indexed) {
		const noticeBlock = new Notice();

		super({ ...props, notice: noticeBlock });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
