import { Form } from '../../form/form';
import { Button } from '../../button/button';
import { template } from './chatDeleteForm.tmpl';
import { Store } from '../../../core/Store';
import { deleteChat, getChats, setActiveChat } from '../../../services/chats';

export class ChatDeleteForm extends Form {
	constructor(props: {
		title: string;
		chatId: number;
	}) {
		super({
			...props,
			button: new Button({
				btnClass: 'w-full',
				btnText: 'Delete',
			}),
		});
	}

	async onSubmit() {
		(this.children.button as Button).setLoading(true);
		await Store.dispatch(deleteChat, this.props.chatId);
		await Store.dispatch(getChats);
		await Store.dispatch(setActiveChat);
		Store.dispatch({ activeModal: '' });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
