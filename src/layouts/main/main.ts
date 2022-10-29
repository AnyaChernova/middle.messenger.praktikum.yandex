import { Block } from '../../core/Block';
import { Aside } from '../../components/aside/aside';
import { Header } from '../../components/header/header';
import { Notice } from '../../components/notice/notice';
import { template } from './main.tmpl';

export class MainLayout extends Block<Indexed> {
	constructor(props: Indexed) {
		super({
			...props,
			aside: new Aside({ links: props.links }),
			header: new Header(),
			notice: new Notice(),
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
