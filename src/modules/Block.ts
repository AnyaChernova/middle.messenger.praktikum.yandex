import Handlebars from "handlebars";
import { nanoid } from 'nanoid';
import EventBus from "./EventBus";

Handlebars.registerHelper("if", function(this: any, conditional, options) {
	if (conditional) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

type blockProps = Record<string, unknown>;

export default class Block {
	static EVENTS = {
		INIT: "init",
		FLOW_CDM: "flow:component-did-mount",
		FLOW_CDU: "flow:component-did-update",
		FLOW_RENDER: "flow:render"
	};

	public id = nanoid(6);

	private _element: HTMLElement | null;
	protected props: blockProps;
	protected children: Record<string, Block | Block[]>;
	private eventBus = () => new EventBus;

	constructor(propsAndChildren: blockProps = {}) {
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
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	protected init() {
		this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
	}

	private _getChildren(propsAndChildren: blockProps) {
		const children: Record<string, Block | Block[]> = {};
		const props: blockProps = {};

		Object.entries(propsAndChildren).forEach(([key, value]) => {
			if (value instanceof Block) {
				children[key] = value;
			} else if (Array.isArray(value) && value.every(v => v instanceof Block)) {
				children[key] = value;
			} else {
				props[key] = value;
			}
		});

		return { children, props };
	}

	private _componentDidMount() {
		this.componentDidMount();
	}

	public componentDidMount() {}

	protected dispatchComponentDidMount() {
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);
	}

	private _componentDidUpdate(oldProps: blockProps, newProps: blockProps) {
		const response = this.componentDidUpdate(oldProps, newProps);
		if (!response) {
			return;
		}
		this._render();
	}

	public componentDidUpdate(oldProps: blockProps, newProps: blockProps) {
		if (JSON.stringify(oldProps) === JSON.stringify(newProps)) {
			return true;
		}
	}

	public setProps = (nextProps: blockProps) => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	get element(): HTMLElement | null {
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
	}

	public render(): DocumentFragment {
		return new DocumentFragment();
	}

	private _deleteEvents() {
		const {events = {}}: any = this.props;

		Object.keys(events).forEach(eventName => {
			this._element!.removeEventListener(eventName, events[eventName]);
		});
	}

	private _addEvents() {
		const {events = {}}: any = this.props;

		Object.keys(events).forEach(eventName => {
			this._element!.addEventListener(eventName, events[eventName]);
		});
	}

	private _makePropsProxy(props: blockProps) {
		const self = this;

		return new Proxy(props, {
			get(target: blockProps, prop: string) {
				const value = target[prop];
				return typeof value === "function" ? value.bind(target) : value;
			},
			set(target: blockProps, prop: string, value: unknown) {
				target[prop] = value;
				self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
				return true;
			},
			deleteProperty() {
				throw new Error("Нет доступа");
			}
		});
	}

	protected _createDocumentElement(tagName: string) {
		return document.createElement(tagName);
	}

	protected compile(template: string, props: blockProps) {
		const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

		Object.entries(this.children).forEach(([key, child]) => {
			if (Array.isArray(child)) {
				props[key] = child.map((item) => `<div data-id="id-${item.id}"></div>`);
			} else {
				props[key] = `<div data-id="id-${child.id}"></div>`;
			}
		});

		fragment.innerHTML = Handlebars.compile(template)(props);

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
		this.getContent().style.display = "block";
	}

	public hide() {
		this.getContent().style.display = "none";
	}
}
