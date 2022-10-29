import { Form } from '../../form/form';
import { Validator } from '../../../core/Validator';
import { template } from './chatField.tmpl';
import { Button } from '../../button/button';
import { FileUploader } from '../../fileUploader/fileUploader';
import { fileSize } from '../../../utils/file';
import { clipIcon } from '../../icons/clip';
import { store } from '../../../core/Store';
import { sendMessage, sendMessageFile } from '../../../services/messages';

export class ChatField extends Form {
	private _validator: Validator | null;

	private _input: HTMLInputElement | null;

	constructor() {
		const fileBtn = new Button({
			btnClass: 'btn--icon chatField__icon',
			btnIcon: clipIcon,
			btnType: 'button',
		});
		const fileUploader = new FileUploader({
			fileFormats: 'xls,xlsx,doc,docx,pdf,png,jpg,jpeg',
			fileMaxSize: 10 * fileSize.MB,
		});

		super({
			fileBtn,
			fileUploader,
		});

		this._validator = null;
		this._input = null;
		this._initValidate();
	}

	private _initValidate() {
		this._input = this.element!.querySelector('input');
		if (!this._input) {
			return;
		}
		this._validator = new Validator(this._input);
	}

	validate(e: MouseEvent) {
		e.preventDefault();
		const isEmpty: boolean = this._validator!.checkIsEmpty();
		if (!isEmpty) {
			this.onSubmit();
		}
	}

	onSubmit() {
		store.dispatch(sendMessage, this._input!.value);
		this._input!.value = '';
	}

	componentDidMount() {
		this._initValidate();
		const fileUploader = this.children.fileUploader as FileUploader;
		fileUploader.onSubmit = () => {
			store.dispatch(sendMessageFile, fileUploader.files[0]);
		};

		(this.children.fileBtn as Button).setClick(() => {
			fileUploader.emitClick();
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
