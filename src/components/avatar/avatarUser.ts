import { AvatarType } from '../../utils/types';
import { template } from './avatar.tmpl';
import { Avatar } from './avatar';
import { withStore } from '../../utils/withStore';
import { Block } from '../../core/Block';

class AvatarUserClass extends Avatar {
	constructor(props: AvatarType) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const AvatarUser = withStore(AvatarUserClass as typeof Block, (state) => {
	return {
		url: state.avatar,
	};
});
