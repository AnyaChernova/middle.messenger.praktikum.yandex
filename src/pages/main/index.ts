import mainPage from './main';

const pageMain: HTMLElement | null = document.querySelector('.page-main');
if (pageMain) pageMain.append(mainPage.getContent());
