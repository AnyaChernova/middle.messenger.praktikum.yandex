import Route from './Route';
import Block from './Block';

interface BlockClass extends Function {
	new(): Block<any>;
}

export default class Router {
	private _currentRoute: Route | null;

	readonly _rootQuery: string;

	private static __instance: Router;

	public routes: Route[];

	public history: History;

	constructor(rootQuery: string) {
		this.routes = [];
		this.history = window.history;
		this._currentRoute = null;
		this._rootQuery = rootQuery;

		if (Router.__instance) {
			return Router.__instance;
		}

		Router.__instance = this;
	}

	use(pathname: string, block: BlockClass) {
		const route = new Route(pathname, block, this._rootQuery);

		this.routes.push(route);

		return this;
	}

	start() {
		window.onpopstate = (() => {
			this._onRoute(window.location.pathname);
		});

		this._onRoute(window.location.pathname);
	}

	_onRoute(pathname: string) {
		const route = this.getRoute(pathname);
		if (!route) {
			return;
		}

		if (this._currentRoute && this._currentRoute !== route) {
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

	getRoute(pathname: string) {
		return this.routes.find(route => route.match(pathname));
	}
}