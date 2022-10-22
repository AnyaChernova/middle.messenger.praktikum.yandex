import { Block } from '../../../core/Block';
import { template } from './chatList.tmpl';
import { withStore } from '../../../utils/withStore';
import { ChatItem } from '../chatItem/chatItem';
import { ChatItemType } from '../../../utils/types';
import { getChats, initChat, setActiveChat } from '../../../services/chats';
import { Store } from '../../../core/Store';

class ChatListClass extends Block<Indexed> {
	constructor(props: Indexed) {
		super(props);
		this.children.chats = this.props.chatList.map((item: ChatItemType) => new ChatItem(item));

		this.getChats();
	}

	async getChats() {
		await Store.dispatch(getChats);
		this.props.chatList.forEach((chat: ChatItemType) => {
			Store.dispatch(initChat.bind(this), chat);
		});
		await Store.dispatch(setActiveChat);
	}

	render() {
		this.children.chats = this.props.chatList.map((item: ChatItemType) => new ChatItem({
			...item,
			isActive: item.id === this.props.activeChat?.id,
		}));
		return this.compile(template, { ...this.props });
	}
}

export const ChatList = withStore(ChatListClass as typeof Block, (state) => ({
	chatList: state.chatList,
	activeChat: state.activeChat,
	activeChatMessages: state.activeChatMessages,
}));
