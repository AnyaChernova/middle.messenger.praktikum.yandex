import { Block } from '../../core/Block';
import { template } from './message.tmpl';
import { MessageType } from '../../utils/types';

export class Message extends Block<MessageType> {
	constructor(props: MessageType) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
