import {
	ChatItemDTO, ChatMessageDTO, ChatMessageFileSocket, ChatMessageSocket, UserDTO,
} from '../api/types';
import {
 ChatFileType, ChatItemType, ChatMessageType, UserType,
} from './types';
import {
 diffDays, getDay, getDayString, getTime, isSameDay,
} from './time';
import { RESOURCES_URL } from './consts';

export const transformUser = (data: UserDTO): UserType => ({
	id: data.id,
	login: data.login,
	firstName: data.first_name,
	secondName: data.second_name,
	displayName: data.display_name,
	avatar: data.avatar,
	phone: data.phone,
	email: data.email,
	role: data.role === 'admin' ? 'admin' : 'user',
});

export const transformChatMessage = (data: ChatMessageDTO): ChatMessageType => {
	const diff = diffDays(data.time, new Date().toDateString());
	let dayTitle = getTime(data.time);

	if (!isSameDay(data.time, new Date().toDateString())) {
		if (diff === 1) {
			dayTitle = 'yesterday';
		} else if (diff < 4) {
			dayTitle = getDay(data.time);
		} else {
			dayTitle = getDayString(data.time);
		}
	}

	return {
		user: transformUser(data.user),
		time: dayTitle,
		content: data.content,
	};
};

export const transformSocketMessageFile = (data: ChatMessageFileSocket): ChatFileType => ({
	id: data.id,
	userId: data.user_id,
	path: `${RESOURCES_URL}${data.path}`,
	filename: data.filename,
	contentType: data.content_type,
	contentSize: data.content_size,
	uploadDate: data.upload_date,
});

export const transformSocketMessage = (data: ChatMessageSocket): ChatMessageType => ({
	userId: data.user_id,
	time: data.time,
	content: data.content,
	file: data.file ? transformSocketMessageFile(data.file) : undefined,
});

export const transformChatItem = (data: ChatItemDTO): ChatItemType => ({
	id: data.id,
	title: data.title,
	avatar: data.avatar,
	unreadCount: data.unread_count,
	lastMessage: data.last_message ? transformChatMessage(data.last_message) : null,
});
