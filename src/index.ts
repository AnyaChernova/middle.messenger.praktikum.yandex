import Router from './modules/Router';
import { MainPage } from './pages/main/main';
import { LoginPage } from './pages/login/login';
import { RegisterPage } from './pages/register/register';
import { ErrorPage } from './pages/error/error';
import { PasswordPage } from './pages/settings/password/password';
import { ProfilePage } from './pages/settings/profile/profile';

const router = new Router('.app');
router
	.use('/', MainPage)
	.use('/login', LoginPage)
	.use('/register', RegisterPage)
	.use('/error', ErrorPage)
	.use('/settings', ProfilePage)
	.use('/settings-password', PasswordPage)
	.start();
