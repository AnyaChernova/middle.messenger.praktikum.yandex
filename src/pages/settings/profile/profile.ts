import MainLayout from "../../../layouts/main/main";
import SettingsNav from "../../../components/settings/nav/settingsNav";
import {pageProfileData} from "../mocks";
import SettingsProfile from "../../../components/settings/profile/settingsProfile";

const navBlock = new SettingsNav({page: pageProfileData});
const profileBlock = new SettingsProfile();
const profilePage = new MainLayout({
	title: pageProfileData.title as string,
	page: pageProfileData,
	body: profileBlock,
	nav: navBlock
});

export default profilePage;
