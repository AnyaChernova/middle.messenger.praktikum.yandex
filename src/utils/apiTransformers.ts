import { ChatItemDTO, ChatMessageDTO, UserDTO } from '../api/types';
import { ChatItemType, ChatMessageType, UserType } from './types';

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

export const transformChatMessage = (data: ChatMessageDTO): ChatMessageType => ({
		user: transformUser(data.user),
		time: data.time,
		content: data.content,
	});

export const transformChatItem = (data: ChatItemDTO): ChatItemType => ({
		id: data.id,
		title: data.title,
		avatar: data.avatar,
		unreadCount: data.unread_count,
		lastMessage: data.last_message ? transformChatMessage(data.last_message) : null,
	});
