import { Avatar } from './avatar';
import { withStore } from '../../utils/withStore';
import { Block } from '../../core/Block';

class AvatarChatClass extends Avatar {
	constructor(props: Indexed) {
		super({
			class: 'avatar--s',
			url: '',
			size: 44,
			...props
		});
	}
}

export const AvatarChat = withStore(AvatarChatClass as typeof Block, (state) => {
	return {
		url: state.activeChat?.avatar ?? '',
		title: state.activeChat?.title ? state.activeChat.title[0] : '',
	};
});
