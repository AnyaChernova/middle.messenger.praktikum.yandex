import './assets/scss/style.scss';
import { store, StoreEvents } from './core/Store';
import { AppState } from './utils/types';
import { initApp } from './services/initApp';
import { initRouter } from './services/initRouter';
import { Router } from './core/Router';

store.on(StoreEvents.Updated, (_prevState: AppState, nextState: AppState) => {
	console.log(
		'%cstore updated',
		'background: #222; color: #bada55',
		nextState,
	);

	if (nextState.errorCode === 404 || nextState.errorCode === 403) {
		new Router().go('/error');
	}

	if (String(nextState.errorCode).startsWith('5')) {
		new Router().go('/error');
	}
});

store.dispatch(initApp);
initRouter(store);
