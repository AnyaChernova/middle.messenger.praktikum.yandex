import { Dispatch } from '../core/Store';
import { AppState } from '../utils/types';
import { transformUser } from '../utils/apiTransformers';
import { Router } from '../core/Router';
import { getUser } from './auth';
import { RESOURCES_URL } from '../utils/consts';
import { getChats, setActiveChat } from './chats';

export const initApp = async (dispatch: Dispatch<AppState>) => {
	try {
		const user = await getUser();
		if (user) {
			dispatch({
				user: transformUser(user),
				avatar: user.avatar ? `${RESOURCES_URL}${user.avatar}` : 'avatar.svg',
			});
			if (document.location.pathname === '/') {
				new Router().go('/messages');
			}
			await dispatch(getChats);
			await dispatch(setActiveChat);
		} else {
			new Router().go('/');
		}
	} catch (e) {
		new Router().go('/');
	}
};
