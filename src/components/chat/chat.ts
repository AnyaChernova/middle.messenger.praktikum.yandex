import { Block } from '../../core/Block';
import { ChatField } from '../chatField/chatField';
import { template } from './chat.tmpl';
import {
	FieldType,
	MessageType,
	TabType,
	UserType,
} from '../../utils/types';

type ChatProps = {
	user: Block<UserType>,
	messages: Block<MessageType>[],
	tabs: Block<TabType>[],
	field?: Block<FieldType>,
};

export class Chat extends Block<ChatProps> {
	constructor(props: ChatProps) {
		super({
			...props,
			field: new ChatField({ name: 'message', type: 'text' }),
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
