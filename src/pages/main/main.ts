import { avatarData, tabs, messages } from './mocks';
import Avatar from '../../components/avatar/avatar';
import User from '../../components/user/user';
import Message from '../../components/message/message';
import MessageTab from '../../components/messageTab/messageTab';
import Chat from '../../components/chat/chat';
import MainLayout from '../../layouts/main/main';
import { avatarType, userType } from '../../utils/types';

const userBlock = new User({ name: 'User name', caption: 'Active Now', avatar: new Avatar(avatarData) });
const messagesList = messages.map((message) => new Message({
	...message,
	avatar: message.user ? new Avatar(message.user as avatarType) : undefined,
}));
const tabsList = tabs.map((tab) => {
	let user: User | userType = tab.user;
	if (!(tab.user instanceof User)) {
		const userData = { ...tab.user as userType };
		user = new User({
			...userData,
			avatar: new Avatar(userData.avatar as avatarType),
		});
	}
	return new MessageTab({ ...tab, user });
});
const chatBlock = new Chat({ user: userBlock, messages: messagesList, tabs: tabsList });

const mainPage = new MainLayout({
	innerClass: 'content__inner--full',
	body: chatBlock,
});

export default mainPage;
