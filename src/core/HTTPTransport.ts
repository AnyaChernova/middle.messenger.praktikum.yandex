import { queryStringify } from '../utils/queryStringify';
import { API_URL } from '../utils/consts';

enum Methods {
	Get = 'GET',
	Post = 'POST',
	Put = 'PUT',
	Delete = 'DELETE',
}

type RequestOptions = {
	method?: Methods,
	headers?: Record<string, string>,
	timeout?: number,
	data?: any,
};

type RequestResponse = {
	status: number,
	data: Indexed,
};

export class HTTPTransport {
	static BASE_URL = API_URL;

	private readonly _apiURL: string;

	protected _headers: Record<string, string>;

	constructor(pathname: string) {
		this._apiURL = HTTPTransport.BASE_URL + pathname;
		this._headers = { 'Content-Type': 'application/json' };
	}

	public get = (url: string, options: RequestOptions = {}): Promise<RequestResponse> => {
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

	public post = (
		url: string,
		options: RequestOptions = {},
): Promise<RequestResponse> => this.request(
		url,
		{ ...options, method: Methods.Post },
		options.timeout,
	);

	public put = (
		url: string,
		options: RequestOptions = {},
): Promise<RequestResponse> => this.request(
		url,
		{ ...options, method: Methods.Put },
		options.timeout,
	);

	public delete = (
		url: string,
		options: RequestOptions = {},
): Promise<RequestResponse> => this.request(
		url,
		{ ...options, method: Methods.Delete },
		options.timeout,
	);

	request = (
		url: string,
		options: RequestOptions,
		timeout: number = 5000,
): Promise<RequestResponse> => {
		const { headers = {}, method, data } = options;
		url = `${this._apiURL}${url}`;

		return new Promise((resolve, reject) => {
			if (!method) {
				reject('No method');
				return;
			}

			const xhr = new XMLHttpRequest();
			xhr.responseType = 'json';
			xhr.open(method, url);

			Object.keys(headers).forEach(key => {
				xhr.setRequestHeader(key, headers[key]);
			});

			xhr.onload = () => {
				if (xhr.status === 200) {
					resolve({
						status: xhr.status,
						data: xhr.response,
					});
				} else {
					reject({
						status: xhr.status,
						data: xhr.response,
					});
				}
			};

			xhr.withCredentials = true;
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
