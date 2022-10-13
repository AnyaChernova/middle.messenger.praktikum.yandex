import { Block } from '../../core/Block';
import { template } from './messageTab.tmpl';
import { TabType } from '../../utils/types';

export class MessageTab extends Block<TabType> {
	constructor(props: TabType) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
