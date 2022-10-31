import { Form } from '../../form/form';
import { Button } from '../../button/button';
import { template } from './chatDeleteForm.tmpl';
import { store } from '../../../core/Store';
import { deleteChat, setActiveChat } from '../../../services/chats';

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
		await store.dispatch(deleteChat, this.props.chatId);
		await store.dispatch(setActiveChat);
		store.dispatch({ activeModal: '' });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
