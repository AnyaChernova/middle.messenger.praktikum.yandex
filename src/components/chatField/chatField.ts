import { Form } from '../form/form';
import { Validator } from '../../core/Validator';
import { template } from './chatField.tmpl';
import { withStore } from '../../utils/withStore';
import { Block } from '../../core/Block';

export class ChatFieldClass extends Form {
	private _validator: Validator | null;

	private _input: HTMLInputElement | null;

	constructor(props: Indexed) {
		super(props);

		this._validator = null;
		this._input = null;
		this._initValidate();
	}

	private _initValidate() {
		this._input = this.element!.querySelector('input');
		if (!this._input) {
			return;
		}
		this._validator = new Validator(this._input);
	}

	validate(e: MouseEvent) {
		e.preventDefault();
		const isEmpty: boolean = this._validator!.checkIsEmpty();
		if (!isEmpty) {
			this.onSubmit();
		}
	}

	onSubmit() {
		this.props.activeChat.ws.send({
			type: 'message',
			content: this._input!.value,
		});

		this._input!.value = '';
	}

	componentDidMount() {
		this._initValidate();
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const ChatField = withStore(ChatFieldClass as typeof Block, (state) => ({
	activeChat: state.activeChat,
}));
