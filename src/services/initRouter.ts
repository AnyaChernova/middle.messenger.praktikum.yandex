import { Router } from '../core/Router';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { RegisterPage } from '../pages/register/register';
import { ErrorPage } from '../pages/error/error';
import { ProfilePage } from '../pages/settings/profile/profile';
import { PasswordPage } from '../pages/settings/password/password';
import { Store } from '../core/Store';

const routes = [
	{
		path: '/',
		block: LoginPage,
		shouldAuthorized: false,
	},
	{
		path: '/register',
		block: RegisterPage,
		shouldAuthorized: false,
	},
	{
		path: '/error',
		block: ErrorPage,
		shouldAuthorized: false,
	},
	{
		path: '/messages',
		block: MainPage,
		shouldAuthorized: true,
	},
	{
		path: '/settings',
		block: ProfilePage,
		shouldAuthorized: true,
	},
	{
		path: '/settings-password',
		block: PasswordPage,
		shouldAuthorized: true,
	},
];

export const initRouter = (store: typeof Store) => {
	const router = new Router('.app');
	routes.forEach(route => {
		router.use(route.path, () => {
			const appInit = store.getState().appInit;
			const isAuthorized = Boolean(store.getState().user);

			if (!appInit) {
				return null;
			}

			if (appInit && !isAuthorized && route.shouldAuthorized) {
				router.go('/');
				return null;
			}

			return route.block;
		});
	});

	router.start();
};
