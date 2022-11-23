import { HTTPTransport } from './HTTPTransport';
import { API_URL } from '../utils/consts';

describe('HTTPTransport', () => {
	const apiUrl = API_URL;
	const mockData = { test: 1 };
	const createXHRMock = () => ({
			open: jest.fn(),
			setRequestHeader: jest.fn(),
			onload: jest.fn(),
			send: jest.fn(),
			readyState: 4,
			response: mockData,
			status: 200,
			withCredentials: false,
		});

	let xhrMock = createXHRMock();
	let http = new HTTPTransport('/');

	beforeEach(() => {
		xhrMock = createXHRMock();
		// @ts-expect-error
		window.XMLHttpRequest = jest.fn(() => xhrMock);

		http = new HTTPTransport('/');
	});

	describe('request', () => {
		it('should create request correctly', () => {
			http.get('test');

			expect(xhrMock.send).toHaveBeenCalled();
			expect(xhrMock.open).toHaveBeenCalledWith('GET', `${apiUrl}/test`);
			expect(xhrMock.withCredentials).toBe(true);
		});

		it('should return expect response', () => {
			http.get('test').then((response) => {
				expect(response).toEqual({
					status: 200,
					data: mockData,
				});
			});
			xhrMock.onload();
		});
	});

	describe('get', () => {
		it('should create request correctly', () => {
			http.get('test');

			expect(xhrMock.open).toHaveBeenCalledWith('GET', `${apiUrl}/test`);
		});

		it('should stringify url', () => {
			http.get('test', { data: { param: 1 } });

			expect(xhrMock.open).toHaveBeenCalledWith('GET', `${apiUrl}/test?param=1`);
		});
	});

	describe('post', () => {
		it('should create request correctly', () => {
			http.post('test');

			expect(xhrMock.open).toHaveBeenCalledWith('POST', `${apiUrl}/test`);
		});

		it('should send expect data', () => {
			http.post('test', { data: mockData });

			expect(xhrMock.send).toHaveBeenCalledWith(mockData);
		});
	});

	describe('put', () => {
		it('should create request correctly', () => {
			http.put('test');

			expect(xhrMock.open).toHaveBeenCalledWith('PUT', `${apiUrl}/test`);
		});
	});

	describe('delete', () => {
		it('should create request correctly', () => {
			http.delete('test');

			expect(xhrMock.open).toHaveBeenCalledWith('DELETE', `${apiUrl}/test`);
		});
	});
});
