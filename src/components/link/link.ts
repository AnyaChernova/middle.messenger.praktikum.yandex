import { Block } from '../../core/Block';
import { template } from './link.tmpl';
import { LinkType } from '../../utils/types';
import { Router } from '../../core/Router';

export class Link extends Block<LinkType> {
	constructor(props: LinkType) {
		super({
			...props,
			events: {
				...props.events,
				click: {
					handler: () => {
						new Router().go(this.props.to);
					},
				},
			},
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
