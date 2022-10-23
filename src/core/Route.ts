import { Block, BlockClass } from './Block';
import { renderDOM } from '../utils/renderDOM';

export class Route {
	private readonly _rootQuery: string;

	private readonly _blockClass: BlockClass;

	private _block: Nullable<Block<any>>;

	constructor(view: BlockClass, rootQuery: string) {
		this._blockClass = view;
		this._block = null;
		this._rootQuery = rootQuery;
	}

	leave() {
		if (this._block) {
			this._block.componentWillUnmount();
		}
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
