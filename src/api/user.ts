import { UserDTO } from './types';
import { HTTPTransport } from '../core/HTTPTransport';

export class UserApi {
	private _api: HTTPTransport;

	constructor() {
		this._api = new HTTPTransport('/user');
	}

	profile(data: UserDTO) {
		return this._api.put('/profile', {
			data: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		});
	}

	password(data: UserDTO) {
		return this._api.put('/password', {
			data: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		});
	}

	avatar(file: File) {
		const formData = new FormData();
		formData.append('avatar', file);

		return this._api.put('/profile/avatar', {
			data: formData,
		});
	}
}
