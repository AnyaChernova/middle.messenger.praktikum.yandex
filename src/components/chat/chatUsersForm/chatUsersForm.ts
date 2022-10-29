import { store } from '../../../core/Store';
import { template } from './chatUsersForm.tmpl';
import { Block } from '../../../core/Block';
import { Button } from '../../button/button';
import { Avatar } from '../../avatar/avatar';
import { User } from '../../user/user';
import { UserMediaType, UserType } from '../../../utils/types';
import { updateUsers } from '../../../services/chats';
import { searchUsers } from '../../../services/user';
import { RESOURCES_URL } from '../../../utils/consts';

export class ChatUsersForm extends Block<Indexed> {
	private _searchInput: Nullable<HTMLInputElement>;

	private _searchString: string;

	private _timeout: number;

	constructor(props: Indexed) {
		super({
			button: new Button({
				btnClass: 'w-full',
				btnText: 'Save',
			}),
			searchLoading: false,
			users: [],
			selectedUsers: props.selectedUsers,
			events: {
				input: {
					target: '.formInput',
					handler: () => this._onTyping(),
				},
				submit: {
					handler: (e: Event) => {
						this._onSubmit(e);
					},
				},
			},
		});

		this._timeout = 0;
		this._searchString = '';
		this._searchInput = null;
	}

	private _onTyping() {
		clearTimeout(this._timeout);
		this._timeout = setTimeout(() => {
			this.searchUsers();
		}, 300);
	}

	async searchUsers() {
		this._searchString = this._searchInput!.value;
		this.setProps({ searchLoading: true });
		const users = await store.dispatch(searchUsers, { login: this._searchString });
		this.setProps({ searchLoading: false, users });
	}

	private _onDropdownUserClick(userId: number | undefined) {
		const user = this.props.users.find((item: UserMediaType) => item.id === userId);
		if (user) {
			this.setProps({
				selectedUsers: [...new Set([...this.props.selectedUsers, user])],
				users: [],
			});
		}
	}

	private _onDeleteUserClick(userId: number | undefined) {
		const users = [...this.props.selectedUsers];
		const index = this.props.selectedUsers.findIndex((user: UserMediaType) => user.id === userId);
		if (index !== -1) {
			users.splice(index, 1);
			this.setProps({ selectedUsers: users });
		}
	}

	private _setSearchUsers() {
		this.children.searchUsers = this.props.users.map((user: UserMediaType) => new User({
				id: user.id,
				name: user.name,
				avatar: new Avatar({
					url: user.avatar as string,
					class: 'avatar--s',
					size: 40,
				}),
				events: {
					click: {
						handler: () => {
							this._onDropdownUserClick(user.id);
						},
					},
				},
			}));
	}

	private _setSelectedUsers() {
		this.children.selectedUsers = this.props.selectedUsers.map((user: UserMediaType | UserType) => {
			if ('firstName' in user) {
				return new User({
					id: user.id,
					name: (user as UserType).displayName || (user as UserType).firstName,
					isRemove: true,
					caption: (user as UserType).role ?? '',
					avatar: new Avatar({
						url: user.avatar ? `${RESOURCES_URL}${user.avatar}` : 'avatar.svg',
						class: 'avatar--s',
						size: 40,
					}),
					events: {
						click: {
							handler: () => {
								this._onDeleteUserClick(user.id);
							},
						},
					},
				});
			}
				return new User({
					id: user.id,
					name: (user as UserMediaType).name,
					isRemove: true,
					caption: 'user',
					avatar: new Avatar({
						url: (user as UserMediaType).avatar as string,
						class: 'avatar--s',
						size: 40,
					}),
					events: {
						click: {
							handler: () => {
								this._onDeleteUserClick(user.id);
							},
						},
					},
				});
		});
	}

	private async _onSubmit(e: Event) {
		e.preventDefault();
		(this.children.button as Button).setLoading(true);
		await store.dispatch(
			updateUsers,
			this.props.selectedUsers.map((user: UserMediaType) => user.id),
		);
		store.dispatch({ activeModal: '' });
	}

	componentDidMount() {
		this._searchInput = this.element!.querySelector('.formInput');
		this._searchInput!.focus();
		this._searchInput!.value = this._searchString;
	}

	render() {
		this._setSearchUsers();
		this._setSelectedUsers();
		return this.compile(template, { ...this.props });
	}
}
