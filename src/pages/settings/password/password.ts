import { MainLayout } from '../../../layouts/main/main';
import { SettingsNav } from '../../../components/settings/nav/settingsNav';
import { SettingsPassword } from '../../../components/settings/password/settingsPassword';
import { pagePasswordData } from '../mocks';

const navBlock = new SettingsNav({ page: pagePasswordData });
const passwordBlock = new SettingsPassword();
export const passwordPage = new MainLayout({
	title: pagePasswordData.title as string,
	page: pagePasswordData,
	body: passwordBlock,
	nav: navBlock,
});
