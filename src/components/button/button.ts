import { Block } from '../../core/Block';
import { template } from './button.tmpl';
import { BtnType } from '../../utils/types';

export class Button extends Block<BtnType> {
	constructor(props: BtnType) {
		super(props);
	}

	setClick(handler: () => void) {
		this.setProps({
			events: {
				click: { handler }
			}
		});
	}

	setLoading(isLoading: boolean) {
		this.setProps({ isLoading });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
