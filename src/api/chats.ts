import { HTTPTransport } from '../core/HTTPTransport';
import { ChatDTO, UsersToChatDTO } from './types';

export class ChatsApi extends HTTPTransport {
	constructor() {
		super('/chats');
	}

	create(data: ChatDTO) {
		return this.post('', {
			data: JSON.stringify(data),
			headers: this._headers,
		});
	}

	getChat(data: ChatDTO) {
		return this.get('', { data });
	}

	deleteChat(id: number) {
		return this.delete('', {
			data: JSON.stringify({ chatId: id }),
			headers: this._headers,
		});
	}

	token(id: number) {
		return this.post(`/token/${id}`, {
			headers: this._headers,
		});
	}

	list() {
		return this.get('');
	}

	users(id: number) {
		return this.get(`/${id}/users`);
	}

	addUsers(data: UsersToChatDTO) {
		return this.put('/users', {
			data: JSON.stringify(data),
			headers: this._headers,
		});
	}

	deleteUsers(data: UsersToChatDTO) {
		return this.delete('/users', {
			data: JSON.stringify(data),
			headers: this._headers,
		});
	}
}
