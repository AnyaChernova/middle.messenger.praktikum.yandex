import { passwordPage } from './password';

const pagePassword: HTMLElement | null = document.querySelector('.page-settings-password');
if (pagePassword) pagePassword.append(passwordPage.getContent());
