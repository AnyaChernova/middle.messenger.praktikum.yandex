import { Block } from '../core/Block';
import { Store, StoreEvents } from '../core/Store';

export function withStore(Component: typeof Block) {
	// @ts-expect-error No base constructor has the specified
	return class extends Component {

		constructor(props: Indexed = {}) {
			super({ ...props, store: Store });
		}

		__onChangeStoreCallback = () => {
			// @ts-expect-error this is not typed
			this.setProps({ ...this.props, store: Store });
		}

		componentDidMount(props: Indexed) {
			super.componentDidMount(props);
			Store.on(StoreEvents.Updated, this.__onChangeStoreCallback);
		}

		componentWillUnmount() {
			super.componentWillUnmount();
			Store.off(StoreEvents.Updated, this.__onChangeStoreCallback);
		}
	};
}
