import { Block } from '../../../core/Block';
import { template } from './chatHeader.tmpl';
import { withStore } from '../../../utils/withStore';
import { AvatarChat } from '../../avatar/avatarChat';

class ChatHeaderClass extends Block<Indexed> {
	constructor(props: Indexed) {
		super({
			...props,
			avatar: new AvatarChat(),
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const ChatHeader = withStore(ChatHeaderClass as typeof Block, (state) => {
	return {
		title: state.activeChat?.title ?? '',
	};
});
