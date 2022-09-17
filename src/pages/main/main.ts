import {pageData, avatarData, avatarHeaderData, tabs, messages} from "./mocks";
import Header from "../../components/header/header";
import Avatar from "../../components/avatar/avatar";
import Aside from "../../components/aside/aside";
import User from "../../components/user/user";
import Message from "../../components/message/message";
import MessageTab from "../../components/messageTab/messageTab";
import Chat from "../../components/chat/chat";
import MainLayout from "../../layouts/main/main";
import {avatarType, userType} from "../../utils/types";

const asideBlock =  new Aside({page: pageData});
const headerBlock = new Header({avatar: new Avatar(avatarHeaderData)});
const userBlock = new User({name: 'User name', caption: 'Active Now', avatar: new Avatar(avatarData)});
const messagesList = messages.map((message) => {
	return new Message({
		...message,
		avatar: message.user ? new Avatar(message.user as avatarType) : undefined
	});
});
const tabsList = tabs.map((tab) => {
	let user: User | userType = tab.user;
	if (!(tab.user instanceof User)) {
		user = new User({
			...tab.user,
			avatar: new Avatar(tab.user.avatar as avatarType)
		});
	}
	return new MessageTab({...tab, user});
});
const chatBlock = new Chat({user: userBlock, messages: messagesList, tabs: tabsList});

const mainPage = new MainLayout({
	innerClass: 'content__inner--full',
	aside: asideBlock,
	header: headerBlock,
	body: chatBlock
});

export default mainPage;


