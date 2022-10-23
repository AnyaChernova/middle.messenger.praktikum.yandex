import { Dispatch } from '../core/Store';
import { AppState } from '../utils/types';

type RequestError = {
	status: number,
	data: Indexed,
};

export const setError = async (dispatch: Dispatch<AppState>, _state: AppState, err: RequestError) => {
	let reason = err?.data?.reason ? err.data.reason : 'Ooops...something wrong';

	if (err.status === 404) {
		reason = 'Page not found';
	}

	if (err.status === 403) {
		reason = 'You don’t have permission to access';
	}

	if (String(err.status).startsWith('5')) {
		reason = `${err.status} Internal server error`;
	}

	dispatch({
		noticeError: reason,
		errorCode: err.status,
	});
};
