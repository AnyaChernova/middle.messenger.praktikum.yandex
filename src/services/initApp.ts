import { Dispatch } from '../core/Store';
import { AppState } from '../types/app';
import { transformUser } from '../utils/apiTransformers';
import { Router } from '../core/Router';
import { getUser } from './auth';
import { RESOURCES_URL } from '../utils/consts';

export const initApp = async (dispatch: Dispatch<AppState>) => {
	try {
		const user = await getUser();
		if (user) {
			dispatch({
				user: transformUser(user),
				avatar: user.avatar ? `${RESOURCES_URL}${user.avatar}` : '',
			});
			if (document.location.pathname === '/') {
				new Router().go('/messages');
			}
		} else {
			new Router().go('/');
		}
	} catch (e) {
		new Router().go('/');
	}
}
