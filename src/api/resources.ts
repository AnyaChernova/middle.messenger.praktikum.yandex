import { HTTPTransport } from '../core/HTTPTransport';

export class ResourcesApi extends HTTPTransport {
	constructor() {
		super('/resources');
	}

	create(file: File) {
		const formData = new FormData();
		formData.append('resource', file);

		return this.post('', {
			data: formData,
		});
	}
}
