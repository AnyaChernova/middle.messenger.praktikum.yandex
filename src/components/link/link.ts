import Block from '../../modules/Block';
import { template } from './link.tmpl';
import { LinkType } from '../../utils/types';
import Router from '../../modules/Router';

const router = new Router('.app');

export class Link extends Block<LinkType> {
	constructor(props: LinkType) {
		super({
			...props,
			events: {
				...props.events,
				click: {
					handler: () => {
						router.go(this.props.to);
					},
				},
			},
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
