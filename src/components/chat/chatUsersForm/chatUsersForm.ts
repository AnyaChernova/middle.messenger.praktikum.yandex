import { Button } from '../../button/button';
import { template } from './chatUsersForm.tmpl';
import { Block } from '../../../core/Block';
import { searchUsers } from '../../../services/user';
import { Store } from '../../../core/Store';
import { User } from '../../user/user';
import { UserType } from '../../../utils/types';
import { Avatar } from '../../avatar/avatar';

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
			selectedUsers: props.selectedUsers || [],
			events: {
				input: {
					target: '.formInput',
					handler: () => this.onTyping(),
				},
			},
		});

		this._timeout = 0;
		this._searchString = '';
		this._searchInput = null;
	}

	onTyping() {
		clearTimeout(this._timeout);
		this._timeout = setTimeout(() => {
			this.searchUsers();
		}, 300);
	}

	async searchUsers() {
		this._searchString = this._searchInput!.value;
		this.setProps({ searchLoading: true });
		const users = await Store.dispatch(searchUsers, { login: this._searchString });
		this.setProps({ searchLoading: false, users });
		console.log(this);
	}

	addUsersEvents() {
		const dropdown = this.element!.querySelector('.dropdown');
		if (dropdown) {
			dropdown.addEventListener('click', this._onDropdownClick.bind(this));
		}
	}

	_onDropdownClick(e: Event) {
		if (e.target) {
			const userElem = (e.target as HTMLElement).closest('.media');
			if (userElem) {
				const userId = (e.target as HTMLElement).closest('.media')!.id;
				const user = this.props.users.find((item: UserType) => item.id === +userId);
				if (user) {
					this.setProps({
						selectedUsers: [...new Set([...this.props.selectedUsers, user ])],
						users: [],
					});
				}
			}
		}
	}

	componentDidMount() {
		console.log(this)
		this._searchInput = this.element!.querySelector('.formInput');
		this._searchInput!.focus();
		this._searchInput!.value = this._searchString;
		this.addUsersEvents();
	}

	render() {
		this.children.seacrhUsers = this.props.users.map((user: UserType) => {
			return new User({
				id: user.id,
				name: user.name,
				userClass: 'media--dropdown',
				avatar: new Avatar({
					url: user.avatar as string,
					class: 'avatar--s',
					size: 40,
				}),
			});
		});
		this.children.selectedUsers = this.props.selectedUsers.map((user: UserType) => {
			return new User({
				id: user.id,
				name: user.name,
				avatar: new Avatar({
					url: user.avatar as string,
					class: 'avatar--s',
					size: 40,
				}),
			});
		});
		return this.compile(template, { ...this.props });
	}
}
