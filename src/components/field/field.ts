import Block from "../../modules/Block";
import {template} from "./field.tmpl";
import {fieldType} from "../../utils/types";
import Validator from "../../controllers/Validator";

class Field extends Block {
	private validator: Validator | null;

	constructor(props: fieldType) {
		super({
			...props,
			events: {
				blur: {
					target: '.formInput',
					handler: () => this.validate()
				}
			}
		});

		this.validator = null;

		this.initValidate();
	}

	initValidate() {
		const input: HTMLInputElement | null = this.element!.querySelector('input');
		const error: HTMLElement | null = this.element!.querySelector('.formField__error');

		if (!input || !error) {
			return;
		}

		this.validator = new Validator(input, error);
	}

	validate() {
		const isEmpty: boolean = this.validator!.checkMatchRule('phone');
		console.log(isEmpty);
	}

	render() {
		return this.compile(template, {...this.props});
	}
}

export default Field;
