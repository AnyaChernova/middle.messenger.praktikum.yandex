import { Route } from './Route';
import { BlockClass } from './Block';

export class Router {
	private readonly _rootQuery: string = '';

	private static __instance: Router;

	private _currentRoute: Nullable<Route> = null;

	public routes: Record<string, Function> = {};

	public history: History = window.history;

	constructor(rootQuery: string = '') {
		if (Router.__instance) {
			return Router.__instance;
		}

		this.history = window.history;
		this._rootQuery = rootQuery;
		this._currentRoute = null;

		Router.__instance = this;
	}

	use(pathname: string, callback: () => BlockClass | null) {
		this.routes[pathname] = callback;
		return this;
	}

	start() {
		window.onpopstate = (() => {
			this._onRoute(window.location.pathname);
		});

		this._onRoute(window.location.pathname);
	}

	_onRoute(pathname: string) {
		if (!this.routes[pathname]) {
			return;
		}

		const block = this.routes[pathname]();

		if (!block) {
			return;
		}

		const route = new Route(block, this._rootQuery);

		if (this._currentRoute) {
			this._currentRoute.leave();
		}

		this._currentRoute = route;

		route.render();
	}

	go(pathname: string) {
		this.history.pushState({}, '', pathname);
		this._onRoute(pathname);
	}

	back() {
		this.history.back();
	}

	forward() {
		this.history.forward();
	}
}
