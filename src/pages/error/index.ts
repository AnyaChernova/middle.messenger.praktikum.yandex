import errorPage from './error';

const pageError: HTMLElement | null = document.querySelector('.page-error');
if (pageError) pageError.append(errorPage.getContent());
