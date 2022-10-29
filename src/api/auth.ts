import { AuthDTO } from './types';
import { HTTPTransport } from '../core/HTTPTransport';

export class AuthApi extends HTTPTransport {
	constructor() {
		super('/auth');
	}

	user() {
		return this.get('/user');
	}

	logout() {
		return this.post('/logout');
	}

	signup(data: AuthDTO) {
		return this.post('/signup', {
			data: JSON.stringify(data),
			headers: this._headers,
		});
	}

	signin(data: AuthDTO) {
		return this.post('/signin', {
			data: JSON.stringify(data),
			headers: this._headers,
		});
	}
}
