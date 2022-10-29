import { UserDTO } from './types';
import { HTTPTransport } from '../core/HTTPTransport';

export class UserApi extends HTTPTransport {
	constructor() {
		super('/user');
	}

	profile(data: UserDTO) {
		return this.put('/profile', {
			data: JSON.stringify(data),
			headers: this._headers,
		});
	}

	password(data: UserDTO) {
		return this.put('/password', {
			data: JSON.stringify(data),
			headers: this._headers,
		});
	}

	search(data: { login: string }) {
		return this.post('/search', {
			data: JSON.stringify(data),
			headers: this._headers,
		});
	}

	avatar(file: File) {
		const formData = new FormData();
		formData.append('avatar', file);

		return this.put('/profile/avatar', {
			data: formData,
		});
	}
}
