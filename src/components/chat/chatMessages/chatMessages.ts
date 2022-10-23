import { Block } from '../../../core/Block';
import { template } from './chatMessages.tmpl';
import { withStore } from '../../../utils/withStore';
import { ChatMessageType } from '../../../utils/types';
import { setMessage } from '../../../services/messages';

class ChatMessagesClass extends Block<Indexed> {
	constructor(props: Indexed) {
		super(props);

		this._setMessages();
	}

	private _setMessages() {
		this.children.messages = this.props.activeChatMessages
			.map((message: ChatMessageType, i: number) => setMessage(
					message,
					this.props.activeChatMessages[i - 1],
					this.props.activeChatUsers,
					this.props.userId,
				));
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
