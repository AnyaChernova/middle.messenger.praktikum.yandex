import { Router } from './core/Router';
import { MainPage } from './pages/main/main';
import { LoginPage } from './pages/login/login';
import { RegisterPage } from './pages/register/register';
import { ErrorPage } from './pages/error/error';
import { PasswordPage } from './pages/settings/password/password';
import { ProfilePage } from './pages/settings/profile/profile';
import { Store, StoreEvents } from './core/Store';
import { AppState } from './types/app';
import { initApp } from './services/initApp';

const router = new Router('.app');
router
	.use('/', LoginPage)
	.use('/messages', MainPage)
	.use('/register', RegisterPage)
	.use('/error', ErrorPage)
	.use('/settings', ProfilePage)
	.use('/settings-password', PasswordPage)
	.start();

Store.on(StoreEvents.Updated, (_prevState: AppState, nextState: AppState) => {
	console.log(
		'%cstore updated',
		'background: #222; color: #bada55',
		nextState,
	);
});

Store.dispatch(initApp);
