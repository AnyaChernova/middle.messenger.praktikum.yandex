export default class Validator {
	static Errors: Record<string, string> = {
		EMPTY: 'Must not be empty',
		SHORT: 'Must be at least',
		LONG: 'Must be shorter than',
		INVALID: 'Not valid value',
	};

	static Rules: Record<string, RegExp> = {
		name: /^[A-ZА-ЯЁ][A-Za-zА-Яа-яЁё-]+$/,
		password: /(?=.*\d)(?=.*[A-ZА-ЯЁ])/,
		login: /^(?!^\\d+$)[\dA-Za-z-_]+$/,
		email: /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,
		phone: /^\+?\d+$/,
	}

	private fieldElem: HTMLInputElement;
	private errorElem: HTMLElement;

	constructor(fieldElem: HTMLInputElement, errorElem: HTMLElement) {
		this.fieldElem = fieldElem;
		this.errorElem = errorElem;
	}

	protected setError(message: string) {
		this.fieldElem.classList.add('formInput--error');
		this.errorElem.textContent = message;
		this.errorElem.style.display = 'block';
	}

	protected deleteError() {
		this.fieldElem.classList.remove('formInput--error');
		this.errorElem.textContent = '';
		this.errorElem.style.display = 'none';
	}

	checkIsEmpty(): boolean {
		if (this.fieldElem.value.trim() === '') {
			this.setError(Validator.Errors.EMPTY);
			return true;
		} else {
			this.deleteError();
			return false;
		}
	}

	checkValidLength(min: number, max: number): boolean {
		if (this.fieldElem.value.length < min) {
			this.setError(`${Validator.Errors.SHORT} ${min} characters`);
			return false;
		} else if (this.fieldElem.value.length > max) {
			this.setError(`${Validator.Errors.LONG} ${max} characters`);
			return false;
		} else {
			this.deleteError();
			return true;
		}
	}

	checkMatchRule(name: string): boolean {
		console.log(Validator.Rules[name])
		console.log(this.fieldElem.value)
		if (Validator.Rules[name].test(this.fieldElem.value)) {
			this.deleteError();
			return true;
		} else {
			this.setError(Validator.Errors.INVALID);
			return false;
		}
	}
}
