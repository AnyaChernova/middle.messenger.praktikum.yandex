import { Block } from '../../../core/Block';
import { template } from './chatMessages.tmpl';
import { withStore } from '../../../utils/withStore';
import { ChatMessageType, UserType } from '../../../utils/types';
import { Message } from '../../message/message';
import { Avatar } from '../../avatar/avatar';
import { getTime } from '../../../utils/time';
import { RESOURCES_URL } from '../../../utils/consts';

class ChatMessagesClass extends Block<Indexed> {
	constructor(props: Indexed) {
		super(props);

		this._setMessages();
	}

	private _setMessageItem(message: ChatMessageType) {
		let user = message.user;
		if (!user && message.userId) {
			user = this.props.activeChatUsers.find((item: UserType) => item.id === message.userId);
		}

		const isMy = message.userId === this.props.userId;

		return new Message({
			...message,
			itemClass: isMy ? 'chatPanel__item--right' : '',
			mainClass: isMy ? 'media__main--right' : 'media__main--left',
			mediaClass: isMy ? 'media--reverse' : '',
			messageClass: isMy ? 'message--reverse' : '',
			title: (!isMy && user) ? (user.displayName || user.firstName) : '',
			time: getTime(message.time),
			avatar: !isMy ? new Avatar({
				class: 'avatar--m',
				url: (user && user.avatar) ? `${RESOURCES_URL}${user.avatar}` : 'avatar.svg',
				title: user ? (user.displayName || user.firstName) : '',
				size: 50,
			}) : undefined,
		});
	}

	private _setMessages() {
		this.children.messages = this.props.activeChatMessages
			.map((message: ChatMessageType) => this._setMessageItem(message));
	}

	componentDidMount() {
		this.element!.scrollTop = this.element!.scrollHeight;
	}

	render() {
		this._setMessages();
		return this.compile(template, { ...this.props });
	}
}

export const ChatMessages = withStore(ChatMessagesClass as typeof Block, (state) => ({
	userId: state.user?.id,
	loading: state.chatLoading,
	activeChatUsers: state.activeChatUsers,
	activeChatMessages: state.activeChatMessages,
}));
