import { HTTPTransport } from '../core/HTTPTransport';

export class ResourcesApi {
	private _api: HTTPTransport;

	constructor() {
		this._api = new HTTPTransport('/resources');
	}

	create(file: File) {
		const formData = new FormData();
		formData.append('resource', file);

		return this._api.post('', {
			data: formData,
		});
	}
}
