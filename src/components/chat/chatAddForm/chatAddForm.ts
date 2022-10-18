import { Form } from '../../form/form';
import { Button } from '../../button/button';
import { FieldValidate } from '../../field/fieldValidate';
import { template } from './chatAddForm.tmpl';
import { Store } from '../../../core/Store';
import { createChat, getChats, setActiveChat } from '../../../services/chats';

export class ChatAddForm extends Form {
	constructor() {
		super({
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
		await Store.dispatch(getChats);
		await Store.dispatch(setActiveChat);
		Store.dispatch({ activeModal: '' });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
