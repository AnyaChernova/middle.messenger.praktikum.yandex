import { AuthApi } from '../api/auth';
import { Router } from '../core/Router';
import { AuthDTO, UserDTO } from '../api/types';
import { transformUser } from '../utils/apiTransformers';
import { RESOURCES_URL } from '../utils/consts';
import { defaultState } from '../store';
import { setError } from './setError';
import { StateFunction } from '../core/Store';

const api = new AuthApi();

export const getUser = async () => {
	try {
		const res = await api.user();
		return res.data as UserDTO;
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const login: StateFunction = async (
	dispatch,
	_state,
	data: AuthDTO,
) => {
	try {
		await api.signin(data);
		const user = await getUser();
		if (user) {
			dispatch({
				user: transformUser(user),
				avatar: user.avatar ? `${RESOURCES_URL}${user.avatar}` : require('/static/avatar.svg'),
			});
		}
		new Router().go('/messages');
	} catch (e) {
		dispatch(setError, e);
	}
};

export const register: StateFunction = async (
	dispatch,
	_state,
	data: AuthDTO,
) => {
	try {
		await api.signup(data);
		const user = await getUser();
		if (user) {
			dispatch({ user: transformUser(user) });
		}
		new Router().go('/messages');
	} catch (e) {
		dispatch(setError, e);
	}
};

export const logout: StateFunction = async (dispatch, state) => {
	try {
		await api.logout();
		new Router().go('/');
		state.chatList.forEach((chat) => {
			chat.ws!.close();
		});
		dispatch({
			...defaultState,
			appInit: true,
		});
	} catch (e) {
		dispatch(setError, e);
	}
};
