import { WS_URL } from '../utils/consts';

type WSProps = {
	userId: number;
	chatId: number;
	token: string;
};

type MessageType = {
	content?: string;
	type: string;
};

export class WS {
	static BASE_URL = WS_URL;

	static PING_TIMEOUT = 10000;

	private _socket: WebSocket;

	private readonly _id: number;

	public isOpen: boolean = false;

	constructor({ userId, chatId, token }: WSProps) {
		this._id = chatId;
		this._socket = new WebSocket(`${WS.BASE_URL}/${userId}/${chatId}/${token}`);

		this._socket.addEventListener('open', this._onOpen.bind(this));
		this._socket.addEventListener('close', this._onClose.bind(this));
		this._socket.addEventListener('error', this._onError.bind(this));
		this._socket.addEventListener('message', this._onMessage.bind(this));
	}

	send(message: MessageType) {
		this._socket.send(JSON.stringify(message));
	}

	close() {
		this._socket.close();
	}

	onOpen() {
	}

	onMessage(data: any) {
		console.log(data);
	}

	private _onOpen() {
		console.log(`${this._id}: connected`);
		this.onOpen();
		this.isOpen = true;
		setTimeout(() => {
			this.send({ type: 'ping' });
		}, WS.PING_TIMEOUT);
	}

	private _onClose(e: CloseEvent) {
		if (e.wasClean) {
			console.log(`${this._id}: disconnected`);
		} else {
			console.log(`${this._id}: connection break`);
		}
	}

	private _onError(e: Event) {
		console.log(`${this._id}: ${e}`);
	}

	private _onMessage(e: MessageEvent) {
		const parseData = JSON.parse(e.data);

		if (Array.isArray(parseData)) {
			this.onMessage(parseData);
		} else {
			this.onMessage({
				...parseData,
				chat_id: this._id,
			});
		}

		if (parseData.type === 'pong') {
			setTimeout(() => {
				this.send({ type: 'ping' });
			}, WS.PING_TIMEOUT);
		}
	}
}
