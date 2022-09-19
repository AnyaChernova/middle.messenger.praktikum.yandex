import Block from '../../modules/Block';
import { template } from './message.tmpl';
import { messageType } from '../../utils/types';

class Message extends Block {
	constructor(props: messageType) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export default Message;
