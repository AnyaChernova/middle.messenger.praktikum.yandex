import { Router } from './Router';

describe('Router', () => {
	const router = new Router('.app');
	router.start();

	it('should listen onpopstate', () => {
		expect(window.onpopstate).toBeInstanceOf(Function);
	});

	it('should add routes', () => {
		router.use('/', () => null);
		expect(router.routes['/']).toBeInstanceOf(Function);
	});

	it('should change history', () => {
		router.use('/login', () => null);
		router.go('/login');
		expect(window.history.length).toBe(2);
	});

	it('should change location pathname', () => {
		router.use('/register', () => null);
		router.go('/register');
		expect(window.location.pathname).toBe('/register');
	});
});
