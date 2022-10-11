import { MainLayout } from '../../../layouts/main/main';
import { SettingsNav } from '../../../components/settings/nav/settingsNav';
import { SettingsPassword } from '../../../components/settings/password/settingsPassword';
import { pagePasswordData } from '../mocks';

export class PasswordPage extends MainLayout {
	constructor() {
		const navBlock = new SettingsNav({ page: pagePasswordData });
		const passwordBlock = new SettingsPassword();

		super({
			title: pagePasswordData.title as string,
			page: pagePasswordData,
			body: passwordBlock,
			nav: navBlock,
		});
	}
}
