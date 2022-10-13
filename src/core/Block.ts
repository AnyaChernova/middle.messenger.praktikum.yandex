import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';
import EventBus from './EventBus';

Handlebars.registerHelper('if', function (this: any, conditional, options) {
	if (conditional) {
		return options.fn(this);
	}
	return options.inverse(this);
});

export interface BlockClass extends Function {
	new (): Block<any>;
}

export class Block<Props extends Indexed> {
	static EVENTS: Record<string, string> = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_CWU: 'flow:component-will-unmount',
		FLOW_RENDER: 'flow:render',
	};

	public id = nanoid(6);

	public uniqueName: string | undefined;

	private _element:Nullable<HTMLElement>;

	protected props: Props;

	protected children: Record<string, Block<Props> | Block<Props>[]>;

	private eventBus = () => new EventBus;

	constructor(propsAndChildren: Props) {
		const eventBus = new EventBus();
		const { children, props } = this._getChildren(propsAndChildren);

		this.children = children;
		this.props = this._makePropsProxy(props);
		this._element = null;
		this.eventBus = () => eventBus;

		this._registerEvents(eventBus);
		eventBus.emit(Block.EVENTS.INIT);
	}

	private _registerEvents(eventBus: EventBus) {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	protected init() {
		this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
	}

	private _getChildren(propsAndChildren: Props) {
		const children: Record<string, Block<Props> | Block<Props>[]> = {};
		const props: Props = {} as Props;

		Object.entries(propsAndChildren).forEach(([key, value]) => {
			if (value instanceof Block) {
				children[key] = value;
			} else if (Array.isArray(value) && value.every(v => v instanceof Block)) {
				children[key] = value;
			} else {
				props[key as keyof Props] = value;
			}
		});

		return { children, props };
	}

	private _componentDidMount() {
		this.componentDidMount();

		Object.values(this.children).forEach(child => {
			if (Array.isArray(child)) {
				child.forEach(item => item.dispatchComponentDidMount());
			} else {
				child.dispatchComponentDidMount();
			}
		});
	}

	public componentDidMount() {
	}

	_componentWillUnmount() {
		this.eventBus().destroy();
		this.componentWillUnmount();
	}

	componentWillUnmount() {}

	public dispatchComponentDidMount() {
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);
	}

	private _componentDidUpdate(oldProps: Props, newProps: Props) {
		const response = this.componentDidUpdate(oldProps, newProps);
		if (!response) {
			return;
		}
		this._render();
	}

	public componentDidUpdate(oldProps: Props, newProps: Props) {
		return JSON.stringify(oldProps) !== JSON.stringify(newProps);
	}

	public setProps = (nextProps: Props) => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	get element(): Nullable<HTMLElement> {
		return this._element;
	}

	private _render() {
		const fragment = this.render();
		const newElement = fragment.firstElementChild as HTMLElement;

		this._deleteEvents();

		if (this._element) {
			this._element.replaceWith(newElement);
		}

		this._element = newElement;
		this._addEvents();
		this.dispatchComponentDidMount();
	}

	public render(): DocumentFragment {
		return new DocumentFragment();
	}

	private _deleteEvents() {
		const { events = {} }: any = this.props;

		Object.keys(events).forEach(eventName => {
			if (this._element) {
				if (events[eventName].target) {
					const target: HTMLElement = this._element.querySelector(events[eventName].target);
					target.removeEventListener(eventName, events[eventName].handler);
				} else {
					this._element.removeEventListener(eventName, events[eventName].handler);
				}
			}
		});
	}

	private _addEvents() {
		const { events = {} }: any = this.props;

		Object.keys(events).forEach(eventName => {
			if (this._element) {
				if (events[eventName].target) {
					const target: HTMLElement = this._element.querySelector(events[eventName].target);
					target.addEventListener(eventName, events[eventName].handler);
				} else {
					this._element.addEventListener(eventName, events[eventName].handler);
				}
			}
		});
	}

	private _makePropsProxy(props: Props) {
		return new Proxy(props, {
			get: (target: Props, prop: string) => {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set: (target: Props, prop: string, value: any) => {
				const oldProps = {...target};
				target[prop as keyof Props] = value;
				this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
				return true;
			},
			deleteProperty() {
				throw new Error('Нет доступа');
			},
		});
	}

	protected _createDocumentElement(tagName: string) {
		return document.createElement(tagName);
	}

	protected compile(template: string, props: Props) {
		const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

		const templateProps: Indexed = { ...props };

		Object.entries(this.children).forEach(([key, child]) => {
			if (Array.isArray(child)) {
				templateProps[key] = child.map((item) => `<div data-id="id-${item.id}"></div>`);
			} else {
				templateProps[key] = `<div data-id="id-${child.id}"></div>`;
			}
		});

		fragment.innerHTML = Handlebars.compile(template)(templateProps);

		Object.values(this.children).forEach((child) => {
			if (Array.isArray(child)) {
				child.forEach((item) => {
					const stub = fragment.content.querySelector(`[data-id="id-${item.id}"]`);
					if (stub) {
						stub.replaceWith(item.getContent());
					}
				});
			} else {
				const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);
				if (stub) {
					stub.replaceWith(child.getContent());
				}
			}
		});

		return fragment.content;
	}

	public getContent() {
		return this.element as HTMLElement;
	}

	public show() {
		this.getContent().style.display = 'block';
	}

	public hide() {
		this.getContent().style.display = 'none';
	}
}
