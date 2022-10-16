import { Avatar } from './avatar';
import { withStore } from '../../utils/withStore';
import { Block } from '../../core/Block';

class AvatarUserClass extends Avatar {
	constructor(props: Indexed) {
		super({
			url: 'avatar.svg',
			...props,
			size: props.size ?? 40,
		});
	}
}

export const AvatarUser = withStore(AvatarUserClass as typeof Block, (state) => {
	return {
		url: state.avatar,
	};
});
