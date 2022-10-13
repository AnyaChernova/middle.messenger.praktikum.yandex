import { Block } from '../../core/Block';
import { template } from './button.tmpl';
import { BtnType } from '../../utils/types';

export class Button extends Block<BtnType> {
	constructor(props: BtnType) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
