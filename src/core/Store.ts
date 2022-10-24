import EventBus from './EventBus';
import { defaultState } from '../store';
import { AppState } from '../utils/types';

export enum StoreEvents {
	Updated = 'storeUpdated',
}

export type Dispatch<State> = (
	nextStateOrAction: Partial<State> | Action<State>,
	payload?: any,
) => void;

export type Action<State> = (
	dispatch: Dispatch<State>,
	state: State,
	payload: any,
) => void;

export type StateFunction = (
	dispatch: Dispatch<AppState>,
	state: AppState,
	data?: any
) => Promise<void> | void;

class Storage extends EventBus {
	private _state: AppState = {} as AppState;

	constructor() {
		super();

		this._state = defaultState;
	}

	public getState() {
		return this._state;
	}

	public set(nextState: Partial<AppState>) {
		const prevState = { ...this._state };

		this._state = { ...this._state, ...nextState };

		this.emit(StoreEvents.Updated, prevState, nextState);
	}

	async dispatch(
		nextStateOrAction: Partial<AppState> | Action<AppState>,
		payload?: any,
): Promise<any> {
		if (typeof nextStateOrAction === 'function') {
			return nextStateOrAction(this.dispatch.bind(this), this._state, payload);
		}
			return this.set({ ...this._state, ...nextStateOrAction });
	}
}

export const store = new Storage();
