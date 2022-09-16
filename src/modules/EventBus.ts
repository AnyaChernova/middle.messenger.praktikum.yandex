type eventHandler = (...args: unknown[]) => void;

export default class EventBus {
	readonly listeners: Record<string, eventHandler[]> = {};

	constructor() {
		this.listeners = {};
	}

	on(event: string, callback: eventHandler) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}

		this.listeners[event].push(callback);
	}

	off(event: string, callback: eventHandler) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event] = this.listeners[event].filter(
			listener => listener !== callback
		);
	}

	emit(event: string, ...args: unknown[]) {
		this.listeners[event].forEach(function (listener) {
			listener(...args);
		});
	}
}
