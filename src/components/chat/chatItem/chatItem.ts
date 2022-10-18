import { Block } from '../../../core/Block';
import { template } from './chatItem.tmpl';
import { ChatItemType } from '../../../utils/types';
import { Avatar } from '../../avatar/avatar';
import { Store } from '../../../core/Store';
import { setActiveChat } from '../../../services/chats';

export class ChatItem extends Block<Indexed> {
	constructor(props: ChatItemType) {
		super({
			...props,
			avatar: new Avatar({
				class: 'avatar--m',
				url: props.avatar ?? '',
				title: props.title[0],
				size: 50,
			}),
		});

		this.setProps({
			events: {
				click: {
					handler: () => {
						Store.dispatch(setActiveChat, this.props.id);
					},
				},
			},
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
