import Block from '../../modules/Block';
import { template } from './dummy.tmpl';
import { backIcon } from '../icons/back';
import { Link } from '../link/link';

type DummyProps = {
	code: string,
	title: string,
	link?: Link
};

export class Dummy extends Block<DummyProps> {
	constructor(props: DummyProps) {
		const linkBlock = new Link({
			to: '/',
			linkText: 'Back to chats',
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
