import { Block } from '../../core/Block';
import { AvatarType } from '../../utils/types';
import { template } from './avatar.tmpl';

export class Avatar extends Block<AvatarType> {
	constructor(props: AvatarType) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
