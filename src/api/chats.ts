import { HTTPTransport } from '../core/HTTPTransport';
import { ChatDTO, UsersToChatDTO } from './types';

export class ChatsApi {
	private _api: HTTPTransport;

	constructor() {
		this._api = new HTTPTransport('/chats');
	}

	create(data: ChatDTO) {
		return this._api.post('', {
			data: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
		});
	}

	delete(id: number) {
		return this._api.delete('', {
			data: JSON.stringify({ chatId: id }),
			headers: { 'Content-Type': 'application/json' },
		});
	}

	token(id: number) {
		return this._api.post(`/token/${id}`, {
			headers: { 'Content-Type': 'application/json' },
		});
	}

	list() {
		return this._api.get('');
	}

	users(id: number) {
		return this._api.get(`/${id}/users`);
	}

	addUsers(data: UsersToChatDTO) {
		return this._api.put('/users', {
			data: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
		});
	}

	deleteUsers(data: UsersToChatDTO) {
		return this._api.delete('/users', {
			data: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
		});
	}
}
