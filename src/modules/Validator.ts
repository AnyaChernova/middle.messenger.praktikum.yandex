export default class Validator {
	static Errors: Record<string, string> = {
		EMPTY: 'Must not be empty',
		SHORT: 'Must be at least',
		LONG: 'Must be shorter than',
		FIRST_NAME: 'The first letter must be capital, no spaces and no numbers, no special characters',
		SECOND_NAME: 'The first letter must be capital, no spaces and no numbers, no special characters',
		PASSWORD: 'At least one capital letter and number required',
		LOGIN: 'Letters and numbers, no spaces, no special characters',
		EMAIL: 'Not valid email',
		PHONE: 'Only numbers, may start with a plus',
	};

	static Rules: Record<string, RegExp> = {
		first_name: /^[A-ZА-ЯЁ][A-Za-zА-Яа-яЁё-]+$/,
		second_name: /^[A-ZА-ЯЁ][A-Za-zА-Яа-яЁё-]+$/,
		password: /(?=.*\d)(?=.*[A-ZА-ЯЁ])/,
		login: /^(?!^\d+$)[\dA-Za-z-_]+$/,
		email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
		phone: /^\+?\d+$/,
	}

	private _fieldElem: HTMLInputElement;
	private _errorElem: HTMLElement | void;
	private readonly _min: number | void;
	private readonly _max: number | void;

	constructor(
		fieldElem: HTMLInputElement,
		errorElem?: HTMLElement,
		min?: number,
		max?: number
	) {
		this._fieldElem = fieldElem;
		this._errorElem = errorElem;
		this._min = min;
		this._max = max;
	}

	protected setError(message: string) {
		if (this._errorElem) {
			this._fieldElem.classList.add('formInput--error');
			this._errorElem.textContent = message;
			this._errorElem.style.display = 'block';
		}
	}

	protected deleteError() {
		if (this._errorElem) {
			this._fieldElem.classList.remove('formInput--error');
			this._errorElem.textContent = '';
			this._errorElem.style.display = 'none';
		}
	}

	checkIsEmpty(): boolean {
		if (this._fieldElem.value.trim() === '') {
			this.setError(Validator.Errors.EMPTY);
			return true;
		} else {
			this.deleteError();
			return false;
		}
	}

	checkValidLength(min: number, max: number): boolean {
		if (this._fieldElem.value.length < min) {
			this.setError(`${Validator.Errors.SHORT} ${min} characters`);
			return false;
		} else if (this._fieldElem.value.length > max) {
			this.setError(`${Validator.Errors.LONG} ${max} characters`);
			return false;
		} else {
			this.deleteError();
			return true;
		}
	}

	checkValidValue(): boolean {
		if (!Validator.Rules[this._fieldElem.name]) return true;
		if (Validator.Rules[this._fieldElem.name].test(this._fieldElem.value)) {
			this.deleteError();
			return true;
		} else {
			this.setError(Validator.Errors[this._fieldElem.name.toUpperCase()]);
			return false;
		}
	}

	validate() {
		const isEmpty: boolean = this.checkIsEmpty();
		if (!isEmpty) {
			if (this._min && this._max) {
				const isValidLength = this.checkValidLength(this._min, this._max);
				if (isValidLength) {
					this.checkValidValue();
				}
			} else {
				this.checkValidValue();
			}
		}
	}
}
