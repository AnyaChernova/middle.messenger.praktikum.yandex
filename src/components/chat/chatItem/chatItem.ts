import { Block } from '../../../core/Block';
import { template } from './chatItem.tmpl';
import { Avatar } from '../../avatar/avatar';
import { Store } from '../../../core/Store';
import { initActiveChat, setActiveChat } from '../../../services/chats';
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
			console.log(lastMessage);
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
						await Store.dispatch(setActiveChat, this.props.id);
						await Store.dispatch(initActiveChat.bind(this));
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
