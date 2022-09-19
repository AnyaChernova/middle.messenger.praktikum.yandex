import Form from '../form/form';
import Validator from '../../modules/Validator';
import { template } from './chatField.tmpl';
import { fieldType } from '../../utils/types';

class ChatField extends Form {
	private validator: Validator | null;

	private readonly input: HTMLInputElement | null;

	constructor(props: fieldType) {
		super(props);

		this.validator = null;
		this.input = this.element!.querySelector('input');
		this.initValidate();
	}

	initValidate() {
		if (!this.input) return;
		this.validator = new Validator(this.input);
	}

	validate(e: MouseEvent) {
		e.preventDefault();
		const isEmpty: boolean = this.validator!.checkIsEmpty();
		if (isEmpty) {
			console.log('Message is empty');
		} else {
			console.log({ [this.input!.name]: this.input!.value });
		}
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export default ChatField;