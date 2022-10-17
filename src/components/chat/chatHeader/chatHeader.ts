import { Block } from '../../../core/Block';
import { template } from './chatHeader.tmpl';
import { withStore } from '../../../utils/withStore';
import { AvatarChat } from '../../avatar/avatarChat';
import { Button } from '../../button/button';
import { removeIcon } from '../../icons/remove';
import { usersIcon } from '../../icons/users';
import { Modal } from '../../modal/modal';
import { ChatUsersForm } from '../chatUsersForm/chatUsersForm';
import { Store } from '../../../core/Store';

class ChatHeaderClass extends Block<Indexed> {
	constructor(props: Indexed) {
		const usersBtn = new Button({
			btnClass: 'dropdown__item dropdown__item--primary',
			btnTextClass: 'dropdown__text',
			btnText: 'Chat users',
			btnIcon: usersIcon,
			btnIconClass: 'dropdown__icon',
		});
		const deleteChatBtn = new Button({
			btnClass: 'dropdown__item dropdown__item--danger',
			btnTextClass: 'dropdown__text',
			btnText: 'Delete chat',
			btnIcon: removeIcon,
			btnIconClass: 'dropdown__icon',
		});

		super({
			...props,
			avatar: new AvatarChat(),
			usersModal: new Modal({
				content: () => new ChatUsersForm({ selectedUsers: [] })
			}),
			usersBtn,
			deleteChatBtn,
		});

		this.setProps({
			usersModal: new Modal({
				content: () => new ChatUsersForm({ selectedUsers: this.props.activeChatUsers })
			}),
		})
	}

	componentDidMount() {
		(this.children.usersBtn as Button).setClick(() => {
			Store.dispatch({ activeModal: (this.children.usersModal as Block<Indexed>).id });
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const ChatHeader = withStore(ChatHeaderClass as typeof Block, (state) => {
	return {
		title: state.activeChat?.title ?? '',
		activeChatUsers: state.activeChatUsers,
	};
});
