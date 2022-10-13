import { AuthDTO } from './types';
import { HTTPTransport } from '../core/HTTPTransport';

export class AuthApi {
	private _api: HTTPTransport;

	constructor() {
		this._api = new HTTPTransport('/auth');
	}

	user() {
		return this._api.get('/user');
	}

	logout() {
		return this._api.post('/logout');
	}

	signup(data: AuthDTO) {
		return this._api.post('/signup', {
			data: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		});
	}

	signin(data: AuthDTO) {
		return this._api.post('/signin', {
			data: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		});
	}
}
