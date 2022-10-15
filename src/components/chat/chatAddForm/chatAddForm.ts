import { Form } from '../../form/form';
import { Button } from '../../button/button';
import { FieldValidate } from '../../field/fieldValidate';
import { template } from './chatAddForm.tmpl';
import { Store } from '../../../core/Store';
import { createChat } from '../../../services/chats';

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
				btnText: 'Создать',
			}),
		});
	}

	onSubmit() {
		Store.dispatch(createChat, this.formData);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
