import { queryStringify } from '../utils/queryStringify';

enum Methods {
	Get = 'GET',
	Post = 'POST',
	Put = 'PUT',
	Delete = 'DELETE',
}

type TOptions = {
	method: Methods,
	headers?: Record<string, string>,
	timeout?: number,
	data?: any
};

export default class HTTPTransport {
	public get = (url: string, options: TOptions) => {
		const { data } = options;
		let requestUrl = url;
		if (data) {
			requestUrl = `${url}${queryStringify(data)}`;
		}
		return this.request(
			requestUrl,
			{ ...options, method: Methods.Get },
			options.timeout,
		);
	};

	public post = (url: string, options: TOptions) => this.request(
		url,
		{ ...options, method: Methods.Post },
		options.timeout,
	);

	public put = (url: string, options: TOptions) => this.request(
		url,
		{ ...options, method: Methods.Put },
		options.timeout,
	);

	public delete = (url: string, options: TOptions) => this.request(
		url,
		{ ...options, method: Methods.Delete },
		options.timeout,
	);

	request = (url: string, options: TOptions, timeout: number = 5000) => {
		const { headers = {}, method, data } = options;

		return new Promise((resolve, reject) => {
			if (!method) {
				reject('No method');
				return;
			}

			const xhr = new XMLHttpRequest();

			xhr.open(method, url);

			Object.keys(headers).forEach(key => {
				xhr.setRequestHeader(key, headers[key]);
			});

			xhr.onload = () => {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;

			xhr.timeout = timeout;
			xhr.ontimeout = reject;

			if (data) {
				xhr.send(data);
			} else {
				xhr.send();
			}
		});
	};
}
