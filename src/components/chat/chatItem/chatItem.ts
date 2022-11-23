import { Block } from '../../../core/Block';
import { template } from './chatItem.tmpl';
import { Avatar } from '../../avatar/avatar';
import { store } from '../../../core/Store';
import { setActiveChat } from '../../../services/chats';
import { withStore } from '../../../utils/withStore';
import { ChatMessageType, UserType } from '../../../utils/types';

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

		this.setProps({
			lastMessage: this.setLastMessage(this.props.lastMessage),
			events: {
				click: {
					handler: async () => {
						await store.dispatch(setActiveChat, this.props.id);
					},
				},
			},
		});
	}

	setLastMessage(message: ChatMessageType) {
		let lastMessage: Nullable<ChatMessageType> = null;

		if (message) {
			lastMessage = { ...message };

			let user = lastMessage.user;
			if (!user) {
				user = this.props.activeChatUsers.find((item: UserType) => item.id === lastMessage!.userId);
			}
			const login = user?.login;
			if (login === this.props.user?.login) {
				lastMessage.name = 'You';
			} else {
				lastMessage.name = lastMessage.user!.displayName || lastMessage.user!.firstName;
			}
		}

		return lastMessage;
	}

	render() {
		if (this.props.id === this.props.activeChat?.id) {
			this.setProps({ lastMessage: this.setLastMessage(this.props.activeChat.lastMessage) });
		}
		return this.compile(template, { ...this.props });
	}
}

export const ChatItem = withStore(ChatItemClass as typeof Block, (state) => ({
	user: state.user,
	activeChat: state.activeChat,
	activeChatUsers: state.activeChatUsers,
}));
