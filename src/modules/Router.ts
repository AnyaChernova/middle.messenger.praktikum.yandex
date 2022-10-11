import Route from './Route';
import Block from './Block';

interface BlockClass extends Function {
	new(): Block<any>;
}

export default class Router {
	readonly _rootQuery: string = '';

	private static __instance: Router;

	public routes: Route[] = [];

	public history: History = window.history;

	constructor(rootQuery: string) {
		if (Router.__instance) {
			return Router.__instance;
		}

		this.routes = [];
		this.history = window.history;
		this._rootQuery = rootQuery;

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
