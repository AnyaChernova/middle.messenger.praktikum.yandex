import { Block } from '../core/Block';
import { store, StoreEvents } from '../core/Store';
import { isEqual } from './isEqual';

export function withStore(Component: typeof Block, mapStateToProps: (state: Indexed) => Indexed) {
	// @ts-expect-error No base constructor has the specified
	return class extends Component {
		constructor(props: Indexed = {}) {
			let state = mapStateToProps(store.getState());

			super({ ...props, ...state });

			store.on(StoreEvents.Updated, () => {
				const newState = mapStateToProps(store.getState());
				if (!isEqual(state, newState)) {
					// @ts-expect-error this is not typed
					this.setProps({ ...newState });
				}
				state = newState;
			});
		}
	};
}
