import { Block } from '../../core/Block';
import { ChatField } from '../chatField/chatField';
import { template } from './chat.tmpl';
import { Button } from '../button/button';
import { Modal } from '../modal/modal';
import { ChatAddForm } from './chatAddForm/chatAddForm';
import { pencilIcon } from '../icons/pencil';

export class Chat extends Block<Indexed> {
	constructor(props: Indexed) {
		const btnAddChat = new Button({
			btnClass: 'btn--icon btn--primary',
			btnIcon: pencilIcon,
		});
		const modalAddChat = new Modal({
			isOpen: false,
			content: new ChatAddForm(),
		});
		const fieldMessage = new ChatField({ name: 'message', type: 'text' });


		super({
			...props,
			btnAdd: btnAddChat,
			modalAdd: modalAddChat,
			field: fieldMessage,
		});
	}

	componentDidMount() {
		(this.children.btnAdd as Button).setClick(() => {
			(this.children.modalAdd as Modal).open();
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
