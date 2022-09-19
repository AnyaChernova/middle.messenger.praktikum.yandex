import registerPage from './register';

const pageRegister: HTMLElement | null = document.querySelector('.page-register');
if (pageRegister) pageRegister.append(registerPage.getContent());
