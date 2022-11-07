import { store, StoreEvents } from './Store';

describe('Store', () => {
	it('should set state', () => {
		store.set({ appInit: false });

		expect(store.getState().appInit).toBe(false);
	});

	it('should emit event after store was update', () => {
		const mock = jest.fn();

		store.on(StoreEvents.Updated, mock);

		store.set({ appInit: true });
		store.set({ appInit: false });

		expect(mock).toHaveBeenCalled();
	});
});
