import { Block } from '../../core/Block';
import { ChatField } from './chatField/chatField';
import { template } from './chat.tmpl';
import { Button } from '../button/button';
import { Modal } from '../modal/modal';
import { ChatAddForm } from './chatAddForm/chatAddForm';
import { pencilIcon } from '../icons/pencil';
import { ChatList } from './chatList/chatList';
import { Store } from '../../core/Store';
import { ChatHeader } from './chatHeader/chatHeader';
import { ChatMessages } from './chatMessages/chatMessages';
import { withStore } from '../../utils/withStore';

export class ChatClass extends Block<Indexed> {
	constructor(props: Indexed) {
		const btnAddChat = new Button({
			btnClass: 'btn--icon btn--primary',
			btnIcon: pencilIcon,
		});
		const modalAddChat = new Modal({ content: () => new ChatAddForm() });

		super({
			...props,
			btnAdd: btnAddChat,
			modalAdd: modalAddChat,
			field: new ChatField(),
			header: new ChatHeader(),
			chats: new ChatList(),
			messages: new ChatMessages(),
		});

		(this.children.btnAdd as Button).setClick(() => {
			Store.dispatch({ activeModal: (this.children.modalAdd as Block<Indexed>).id });
		});
	}

	componentDidMount() {
		this.setProps({
			isInit: this.props.chatInit,
			isEmpty: this.props.chatInit && this.props.chatList.length === 0,
		})
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const Chat = withStore(ChatClass as typeof Block, (state) => ({
	chatList: state.chatList,
	chatInit: state.chatInit,
}));
