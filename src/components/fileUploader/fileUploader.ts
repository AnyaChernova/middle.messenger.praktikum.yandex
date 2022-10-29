import { Block } from '../../core/Block';
import { template } from './fileUploader.tmpl';
import { fileExtension, humanFileSize } from '../../utils/file';
import { store } from '../../core/Store';

type uploaderType = {
	multiple?: boolean,
	fileFormats?: string,
	fileMaxSize?: number,
	events?: Record<string, object>,
};

export class FileUploader extends Block<uploaderType> {
	private _files: File[];

	protected multiple: boolean;

	protected fileFormats: string;

	protected fileMaxSize: number;

	constructor(props: uploaderType) {
		super({
			...props,
			events: {
				change: {
					handler: (e: Event) => this.onChange(e),
				},
			},
		});

		this.multiple = props.multiple || false;
		this.fileFormats = props.fileFormats || '';
		this.fileMaxSize = props.fileMaxSize || 0;
		this._files = [];
	}

	public emitClick() {
		this.element!.click();
	}

	get files() {
		return this._files;
	}

	onSubmit() {

	}

	protected onChange(e: Event) {
		this._loadFile(e);
		(e.target as HTMLInputElement).value = '';
	}

	private _loadFile(e: Event) {
		try {
			const files = (e.target as HTMLInputElement).files;
			if (files) {
				const filesArray = this.multiple ? [...files] : [files[0]];
				this._files = this._filterFileByFormat(this._filterFileBySize(filesArray));
				this.onSubmit();
			}
		} catch (err) {
			console.log(err);
		}
	}

	private _filterFileBySize(files: File[]) {
		if (this.fileMaxSize === 0) return files;
		return files.filter((file) => {
			const isValidSize = file.size <= this.fileMaxSize;
			if (!isValidSize) {
				const error = `${file.name}\nПревышает максимальный размер (${humanFileSize(this.fileMaxSize)})`;
				store.dispatch({ noticeError: error });
			}
			return isValidSize;
		});
	}

	private _filterFileByFormat(files: File[]) {
		if (this.fileFormats === '') return files;
		return files.filter((file) => {
			const ext = fileExtension(file.name);
			const isValidFormat = this.fileFormats.includes(ext.toLocaleLowerCase());
			if (!isValidFormat) {
				const error = `${file.name}\nФормат файла не разрешен`;
				store.dispatch({ noticeError: error });
			}
			return isValidFormat;
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
