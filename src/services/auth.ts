import { AuthApi } from '../api/auth';
import { Router } from '../core/Router';
import { AuthDTO, UserDTO } from '../api/types';
import { Dispatch } from '../core/Store';
import { AppState } from '../types/app';
import { transformUser } from '../utils/apiTransformers';

const api = new AuthApi();

export const login = async (dispatch: Dispatch<AppState>, _state: AppState, data: AuthDTO) => {
	try {
		await api.signin(data);
		const user = await getUser();
		if (user) {
			dispatch({ user: transformUser(user) });
		}
		new Router().go('/messages');
	} catch (err: any) {
		if (err?.data?.reason) {
			dispatch({ noticeError: err.data.reason });
		}
	}
};

export const register = async (dispatch: Dispatch<AppState>, _state: AppState, data: AuthDTO) => {
	try {
		await api.signup(data);
		const user = await getUser();
		if (user) {
			dispatch({ user: transformUser(user) });
		}
		new Router().go('/messages');
	} catch (err: any) {
		if (err?.data?.reason) {
			dispatch({ noticeError: err.data.reason });
		}
	}
};

export const getUser = async () => {
	try {
		const res = await api.user();
		return res.data as UserDTO;
	} catch (e) {
		console.log(e);
	}
};

export const logout = async (dispatch: Dispatch<AppState>) => {
	try {
		await api.logout();
		new Router().go('/');
		dispatch({ user: null });
	} catch (e) {
		console.log(e);
	}
};
