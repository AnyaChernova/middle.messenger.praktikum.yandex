import { HTTPTransport } from '../core/HTTPTransport';
import { ChatDTO } from './types';

export class ChatsApi {
	private _api: HTTPTransport;

	constructor() {
		this._api = new HTTPTransport('/chats');
	}

	create(data: ChatDTO) {
		return this._api.post('', {
			data: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		});
	}

	list() {
		return this._api.get('');
	}

	users(id: number) {
		return this._api.get(`/${id}/users`);
	}
}
