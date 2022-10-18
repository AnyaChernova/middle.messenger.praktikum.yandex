import { Block } from '../core/Block';
import { Store, StoreEvents } from '../core/Store';

export function withStore(Component: typeof Block, mapStateToProps: (state: Indexed) => Indexed) {
	// @ts-expect-error No base constructor has the specified
	return class extends Component {
		constructor(props: Indexed = {}) {
			let state = mapStateToProps(Store.getState());

			super({ ...props, ...state });

			Store.on(StoreEvents.Updated, () => {
				const newState = mapStateToProps(Store.getState());
				if (JSON.stringify(state) !== JSON.stringify(newState)) {
					// @ts-expect-error this is not typed
					this.setProps({ ...newState });
				}
				state = newState;
			});
		}
	};
}
