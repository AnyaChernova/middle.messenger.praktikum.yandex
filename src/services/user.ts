import { UserDTO } from '../api/types';
import { Dispatch } from '../core/Store';
import { AppState } from '../types/app';
import { transformUser } from '../utils/apiTransformers';
import { UserApi } from '../api/user';

const api = new UserApi();

export const updateProfile = async (dispatch: Dispatch<AppState>, _state: AppState, data: UserDTO) => {
	try {
		const response = await api.profile(data);
		if (response.data) {
			dispatch({ user: transformUser(response.data as UserDTO) });
		}
		dispatch({ noticeSuccess: 'Profile updated successfully' });
	} catch (err: any) {
		if (err?.data?.reason) {
			dispatch({ noticeError: err.data.reason });
		}
	}
};

export const updatePassword = async (dispatch: Dispatch<AppState>, _state: AppState, data: UserDTO) => {
	try {
		await api.password(data);
		dispatch({ noticeSuccess: 'Profile updated successfully' });
	} catch (err: any) {
		if (err?.data?.reason) {
			dispatch({ noticeError: err.data.reason });
		}
	}
};
