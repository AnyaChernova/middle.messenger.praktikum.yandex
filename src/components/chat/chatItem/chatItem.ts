import { Block } from '../../../core/Block';
import { template } from './chatItem.tmpl';
import { Avatar } from '../../avatar/avatar';
import { store } from '../../../core/Store';
import { setActiveChat } from '../../../services/chats';
import { withStore } from '../../../utils/withStore';

export class ChatItemClass extends Block<Indexed> {
	constructor(props: Indexed) {
		super({
			...props,
			avatar: new Avatar({
				class: 'avatar--m',
				url: props.avatar ?? '',
				title: props.title ? props.title[0] : '',
				size: 50,
			}),
		});

		let lastMessage = null;

		if (this.props.lastMessage) {
			lastMessage = { ...this.props.lastMessage };

			const login = this.props.lastMessage.user?.login;
			if (login === this.props.user?.login) {
				lastMessage.name = 'You';
			} else {
				lastMessage.name = lastMessage.user.displayName || lastMessage.user.firstName;
			}
		}

		this.setProps({
			lastMessage,
			events: {
				click: {
					handler: async () => {
						await store.dispatch(setActiveChat, this.props.id);
					},
				},
			},
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const ChatItem = withStore(ChatItemClass as typeof Block, (state) => ({
	user: state.user,
	activeChatMessages: state.activeChatMessages,
}));
