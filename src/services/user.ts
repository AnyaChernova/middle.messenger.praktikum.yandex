import { UserDTO } from '../api/types';
import { Dispatch } from '../core/Store';
import { AppState } from '../utils/types';
import { transformUser } from '../utils/apiTransformers';
import { UserApi } from '../api/user';
import { RESOURCES_URL } from '../utils/consts';
import { setError } from './setError';

const api = new UserApi();

export const updateProfile = async (
	dispatch: Dispatch<AppState>,
	_state: AppState,
	data: UserDTO,
) => {
	try {
		const response = await api.profile(data);
		if (response.data) {
			dispatch({
				user: transformUser(response.data as UserDTO),
				noticeSuccess: 'Profile updated successfully',
			});
		}
	} catch (e) {
		dispatch(setError, e);
	}
};

export const updatePassword = async (
	dispatch: Dispatch<AppState>,
	_state: AppState,
	data: UserDTO,
) => {
	try {
		await api.password(data);
		dispatch({ noticeSuccess: 'Profile updated successfully' });
	} catch (e) {
		dispatch(setError, e);
	}
};

export const updateAvatar = async (
	dispatch: Dispatch<AppState>,
	_state: AppState,
	data: File,
) => {
	try {
		const response = await api.avatar(data);
		if (response.data) {
			dispatch({
				avatar: response.data.avatar ? `${RESOURCES_URL}${response.data.avatar}` : require('/static/avatar.svg'),
				noticeSuccess: 'Avatar updated successfully',
			});
		}
	} catch (e) {
		dispatch(setError, e);
	}
};

export const searchUsers = async (
	dispatch: Dispatch<AppState>,
	_state: AppState,
	data: { login: string },
) => {
	try {
		const response = await api.search(data);
		return response.data.map((user: UserDTO) => ({
				id: user.id,
				avatar: user.avatar ? `${RESOURCES_URL}${user.avatar}` : require('/static/avatar.svg'),
				name: user.display_name || user.first_name,
			}));
	} catch (e) {
		dispatch(setError, e);
		return [];
	}
};
