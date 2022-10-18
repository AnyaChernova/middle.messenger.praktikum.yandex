import { Block } from '../../core/Block';
import { FieldValidate } from '../field/fieldValidate';

export class Form extends Block<any> {
	public formData: { [x: string]: string };

	constructor(props: any) {
		super({
			...props,
			events: {
				submit: {
					handler: (e: MouseEvent) => this.validate(e),
				},
			},
		});

		this.formData = {};
	}

	protected validate(e: MouseEvent) {
		e.preventDefault();
		const fields = this.children.fields as FieldValidate[];
		let isValid: boolean = true;

		if (fields && fields.length) {
			fields.forEach((field) => {
				isValid = field.validate();
				const input: HTMLInputElement | null = field!.element!.querySelector('input');
				this.formData[input!.name] = input!.value;
			});
		}

		if (isValid) {
			this.onSubmit();
		}
	}

	protected onSubmit() {}
}
