import Block from '../../modules/Block';
import { FieldValidate } from '../field/fieldValidate';

export class Form extends Block<any> {
	constructor(props: any) {
		super({
			...props,
			events: {
				submit: {
					handler: (e: MouseEvent) => this.validate(e),
				},
			},
		});
	}

	validate(e: MouseEvent) {
		e.preventDefault();
		const fields = this.children.fields as FieldValidate[];
		const formData: { [x: string]: string }[] = [];

		fields.forEach((field) => {
			field.validate();
			const input: HTMLInputElement | null = field!.element!.querySelector('input');
			formData.push({ [input!.name]: input!.value });
		});

		console.log(formData);
	}
}
