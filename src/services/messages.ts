import { ChatMessageType, UserType } from '../utils/types';
import { Message } from '../components/message/message';
import { Avatar } from '../components/avatar/avatar';
import { diffDays, getDay, getDayStringFull, getTime, isSameDay } from '../utils/time';
import { RESOURCES_URL } from '../utils/consts';

export const setMessage = (
	message: ChatMessageType,
	prevMessage: ChatMessageType | undefined,
	activeChatUsers: UserType[],
	userId: number
): Message => {
	let user = message.user;
	let dayTitle = getDayStringFull(message.time);
	let showDayTitle = true;
	let isMy = message.userId === userId;

	if (!user && message.userId) {
		user = activeChatUsers.find((item: UserType) => item.id === message.userId);
	}

	if(prevMessage && isSameDay(message.time, prevMessage.time)) {
		showDayTitle = false;
	}

	if(isSameDay(message.time, new Date().toDateString())) {
		dayTitle = 'Today';
	} else {
		const diff = diffDays(message.time, new Date().toDateString());
		if (diff === 1) {
			dayTitle = 'Yesterday';
		} else if (diff < 4) {
			dayTitle = getDay(message.time);
		}
	}

	return new Message({
		...message,
		itemClass: isMy ? 'chatPanel__item--right' : '',
		mainClass: isMy ? 'media__main--right' : 'media__main--left',
		mediaClass: isMy ? 'media--reverse' : '',
		messageClass: isMy ? 'message--reverse' : '',
		day: showDayTitle ? dayTitle : '',
		title: (!isMy && user) ? (user.displayName || user.firstName) : '',
		time: getTime(message.time),
		avatar: !isMy ? new Avatar({
			class: 'avatar--m',
			url: (user && user.avatar) ? `${RESOURCES_URL}${user.avatar}` : 'avatar.svg',
			title: user ? (user.displayName || user.firstName) : '',
			size: 50,
		}) : undefined,
	});
}
