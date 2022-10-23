import { Block } from '../../core/Block';
import { template } from './dummy.tmpl';
import { backIcon } from '../icons/back';
import { Link } from '../link/link';
import { withStore } from '../../utils/withStore';

export class DummyClass extends Block<Indexed> {
	constructor(props: Indexed) {
		const linkBlock = new Link({
			to: '/',
			linkText: 'Return back',
			linkClass: 'link link--icon dummy__link',
			linkIcon: backIcon,
		});

		super({
			...props,
			link: linkBlock,
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const Dummy = withStore(DummyClass as typeof Block, (state) => ({
	code: state.errorCode,
	title: state.noticeError,
}));
