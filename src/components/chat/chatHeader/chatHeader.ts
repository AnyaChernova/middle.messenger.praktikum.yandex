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
import { ChatDeleteForm } from '../chatDeleteForm/chatDeleteForm';

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
			chatDeleteModal: new Modal({
				content: () => new ChatDeleteForm({ title: '', chatId: 0, })
			}),
			usersBtn,
			deleteChatBtn,
		});

		this.setProps({
			events: {
				click: {
					target: '.dropdown__open',
					handler: () => {
						this._openDropdown();
					}
				}
			}
		});
	}

	private _openDropdown() {
		this.setProps({ isOpenDropdown: true });
		document.body.addEventListener('click', this._closeDropdown.bind(this));
	}

	private _closeDropdown(e: Event) {
		const target = e.target;
		if (target && (target as HTMLElement).closest('.dropdown__open')) {
			return;
		}
		this.setProps({ isOpenDropdown: false });
		document.body.removeEventListener('click', this._closeDropdown.bind(this));
	}

	componentDidMount() {
		(this.children.usersBtn as Button).setClick(() => {
			Store.dispatch({ activeModal: (this.children.usersModal as Block<Indexed>).id });
		});

		(this.children.deleteChatBtn as Button).setClick(() => {
			Store.dispatch({ activeModal: (this.children.chatDeleteModal as Block<Indexed>).id });
		});

		(this.children.usersModal as Block<Indexed>).setProps({
			content: () => new ChatUsersForm({
				selectedUsers: this.props.activeChatUsers
			})
		});

		(this.children.chatDeleteModal as Block<Indexed>).setProps({
			content: () => new ChatDeleteForm({
				title: this.props.title,
				chatId: this.props.chatId,
			})
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const ChatHeader = withStore(ChatHeaderClass as typeof Block, (state) => {
	return {
		title: state.activeChat?.title ?? '',
		chatId: state.activeChat?.id ?? 0,
		activeChatUsers: state.activeChatUsers,
	};
});
