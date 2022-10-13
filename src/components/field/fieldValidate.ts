import { Block } from '../../core/Block';
import { Validator } from '../../core/Validator';
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

		this.uniqueName = this.props.id;
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
		return this.validator!.validate();
	}

	render() {
		return this.compile(template, { ...this.props });
	}

	componentDidMount() {
		this.initValidate();
	}
}
