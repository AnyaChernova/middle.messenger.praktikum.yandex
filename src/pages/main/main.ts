import { avatarData, tabs, messages } from './mocks';
import { Avatar } from '../../components/avatar/avatar';
import { User } from '../../components/user/user';
import { Message } from '../../components/message/message';
import { MessageTab } from '../../components/messageTab/messageTab';
import { Chat } from '../../components/chat/chat';
import { MainLayout } from '../../layouts/main/main';
import { AvatarType, UserType } from '../../utils/types';

const userBlock = new User({ name: 'User name', caption: 'Active Now', avatar: new Avatar(avatarData) });
const messagesList = messages.map((message) => new Message({
	...message,
	avatar: message.user ? new Avatar(message.user as AvatarType) : undefined,
}));
const tabsList = tabs.map((tab) => {
	let user: User | UserType = tab.user;
	if (!(tab.user instanceof User)) {
		const userData = { ...tab.user as UserType };
		user = new User({
			...userData,
			avatar: new Avatar(userData.avatar as AvatarType),
		});
	}
	return new MessageTab({ ...tab, user });
});
const chatBlock = new Chat({ user: userBlock, messages: messagesList, tabs: tabsList });

export const mainPage = new MainLayout({
	innerClass: 'content__inner--full',
	body: chatBlock,
});
