import { loginPage } from './login';

const pageLogin: HTMLElement | null = document.querySelector('.page-login');
if (pageLogin) pageLogin.append(loginPage.getContent());
