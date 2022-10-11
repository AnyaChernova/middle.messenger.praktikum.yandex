import Block from '../../modules/Block';
import Validator from '../../modules/Validator';
import { template } from './field.tmpl';
import { FieldType } from '../../utils/types';

export class FieldValidate extends Block<FieldType> {
	private validator: Validator | null;

	constructor(props: FieldType) {
		super({
			...props,
			events: {
				...props.events,
				blur: {
					target: '.formInput',
					handler: () => this.validate(),
				},
				focus: {
					target: '.formInput',
					handler: () => this.validate(),
				},
			},
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

		this.validator = new Validator(
			input,
			error,
			this.props.minLength as number,
			this.props.maxLength as number,
		);
	}

	validate() {
		this.validator!.validate();
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
