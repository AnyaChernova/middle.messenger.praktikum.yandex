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
		let noValidFields: Record<string, boolean> = {};

		if (fields && fields.length) {
			fields.forEach((field) => {
				const isValid = field.validate();
				if (isValid) {
					delete noValidFields[field.id];
				} else {
					noValidFields[field.id] = false;
				}

				const input: HTMLInputElement | null = field!.element!.querySelector('input');
				this.formData[input!.name] = input!.value;
			});
		}

		if (!Object.keys(noValidFields).length) {
			this.onSubmit();
		}
	}

	protected onSubmit() {}
}
