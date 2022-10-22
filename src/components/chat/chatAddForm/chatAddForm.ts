import { Form } from '../../form/form';
import { Button } from '../../button/button';
import { FieldValidate } from '../../field/fieldValidate';
import { template } from './chatAddForm.tmpl';
import { Store } from '../../../core/Store';
import { createChat, initChat, setActiveChat } from '../../../services/chats';
import { withStore } from '../../../utils/withStore';
import { Block } from '../../../core/Block';

export class ChatAddFormClass extends Form {
	constructor(props: Indexed) {
		super({
			...props,
			fields: [new FieldValidate({
				title: 'Chat title',
				name: 'title',
				id: 'title',
				type: 'text',
			})],
			button: new Button({
				btnClass: 'w-full',
				btnText: 'Create',
			}),
		});
	}

	async onSubmit() {
		(this.children.button as Button).setLoading(true);
		await Store.dispatch(createChat, this.formData);
		await Store.dispatch(setActiveChat);
		await Store.dispatch(initChat.bind(this), this.props.chatList[0]);
		Store.dispatch({ activeModal: '' });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const ChatAddForm = withStore(ChatAddFormClass as typeof Block, (state) => ({
	chatList: state.chatList,
	activeChat: state.activeChat,
	activeChatMessages: state.activeChatMessages,
}));
