import Block from '../../modules/Block';
import Field from '../field/field';

class Form extends Block {
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
		const fields = this.children.fields as Field[];
		const formData: { [x: string]: string }[] = [];

		fields.forEach((field) => {
			field.validate();
			const input: HTMLInputElement | null = field!.element!.querySelector('input');
			formData.push({ [input!.name]: input!.value });
		});

		console.log(formData);
	}
}

export default Form;
