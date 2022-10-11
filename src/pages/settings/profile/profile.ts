import { MainLayout } from '../../../layouts/main/main';
import { SettingsNav } from '../../../components/settings/nav/settingsNav';
import { SettingsProfile } from '../../../components/settings/profile/settingsProfile';
import { pageProfileData } from '../mocks';

export class ProfilePage extends MainLayout {
	constructor() {
		const navBlock = new SettingsNav({ page: pageProfileData });
		const profileBlock = new SettingsProfile();

		super({
			title: pageProfileData.title as string,
			page: pageProfileData,
			body: profileBlock,
			nav: navBlock,
		});
	}
}
