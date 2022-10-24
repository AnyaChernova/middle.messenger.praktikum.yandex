import { Block } from '../../../core/Block';
import { template } from './settingsAvatarForm.tmpl';
import { Button } from '../../button/button';
import { FileUploader } from '../../fileUploader/fileUploader';
import { store } from '../../../core/Store';
import { updateAvatar } from '../../../services/user';
import { fileSize } from '../../../utils/file';

export class SettingsAvatarForm extends Block<Indexed> {
	constructor(props: Indexed) {
		const updateBtn = new Button({
			btnText: 'Update',
			btnType: 'button',
			asLink: true,
		});
		const fileUploader = new FileUploader({
			fileFormats: 'png,jpg,jpeg',
			fileMaxSize: 10 * fileSize.MB,
		});

		super({
			...props,
			updateBtn,
			fileUploader,
		});
	}

	componentDidMount() {
		const fileUploader = this.children.fileUploader as FileUploader;
		fileUploader.onSubmit = () => {
			store.dispatch(updateAvatar, fileUploader.files[0]);
		};

		(this.children.updateBtn as Button).setClick(() => {
			fileUploader.emitClick();
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
