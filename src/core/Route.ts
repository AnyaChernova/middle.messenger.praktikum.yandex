import { Block, BlockClass } from './Block';
import { renderDOM } from '../utils/renderDOM';

export class Route {
	private readonly _rootQuery: string;

	private readonly _blockClass: BlockClass;

	private _pathname: string;

	private _block: Nullable<Block<any>>;

	constructor(pathname: string, view: BlockClass, rootQuery: string) {
		this._pathname = pathname;
		this._blockClass = view;
		this._block = null;
		this._rootQuery = rootQuery;
	}

	navigate(pathname: string) {
		if (this.match(pathname)) {
			this._pathname = pathname;
			this.render();
		}
	}

	leave() {
		if (this._block) {
			this._block.componentWillUnmount();
		}
	}

	match(pathname: string) {
		return pathname === this._pathname;
	}

	render() {
		if (!this._block) {
			this._block = new this._blockClass();
			renderDOM(this._rootQuery, this._block as Block<any>);
			return;
		}

		renderDOM(this._rootQuery, this._block as Block<any>);
	}
}
