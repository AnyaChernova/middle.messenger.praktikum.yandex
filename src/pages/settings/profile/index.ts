import { profilePage } from './profile';

const pageProfile: HTMLElement | null = document.querySelector('.page-settings-profile');
if (pageProfile) pageProfile.append(profilePage.getContent());
