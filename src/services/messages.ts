import { AppState, ChatMessageType, UserType } from '../utils/types';
import { Message } from '../components/message/message';
import { Avatar } from '../components/avatar/avatar';
import {
 diffDays, getDayFull, getDayStringFull, getTime, isSameDay,
} from '../utils/time';
import { RESOURCES_URL } from '../utils/consts';
import { Dispatch } from '../core/Store';
import { ResourcesApi } from '../api/resources';

const api = new ResourcesApi();

export const sendMessage = (
	_dispatch: Dispatch<AppState>,
	state: AppState,
	data: string,
) => {
	state.activeChat!.ws!.send({
		type: 'message',
		content: data,
	});
};

export const sendMessageFile = async (
	_dispatch: Dispatch<AppState>,
	state: AppState,
	data: File,
) => {
	try {
		const response = await api.create(data);
		if (response.data) {
			state.activeChat!.ws!.send({
				type: 'file',
				content: response.data.id,
			});
		}
	} catch (e) {
		console.log(e);
	}
};

export const setMessage = (
	message: ChatMessageType,
	prevMessage: ChatMessageType | undefined,
	activeChatUsers: UserType[],
	userId: number,
): Message => {
	let user = message.user;
	let dayTitle = getDayStringFull(message.time);
	let showDayTitle = true;
	const isMy = message.userId === userId;

	if (!user && message.userId) {
		user = activeChatUsers.find((item: UserType) => item.id === message.userId);
	}

	if (prevMessage && isSameDay(message.time, prevMessage.time)) {
		showDayTitle = false;
	}

	if (isSameDay(message.time, new Date().toDateString())) {
		dayTitle = 'Today';
	} else {
		const diff = diffDays(message.time, new Date().toDateString());
		if (diff === 1) {
			dayTitle = 'Yesterday';
		} else if (diff < 4) {
			dayTitle = getDayFull(message.time);
		}
	}

	return new Message({
		...message,
		itemClass: isMy ? 'chatPanel__item--right' : '',
		mainClass: isMy ? 'media__main--right' : 'media__main--left',
		mediaClass: isMy ? 'media--reverse' : '',
		messageClass: isMy ? 'message--reverse' : '',
		isImg: message.file && message.file.contentType.includes('image'),
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
};
