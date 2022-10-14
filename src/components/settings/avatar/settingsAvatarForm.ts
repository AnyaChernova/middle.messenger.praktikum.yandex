import { Block } from '../../../core/Block';
import { template } from './settingsAvatarForm.tmpl';
import { Button } from '../../button/button';
import { FileUploader } from '../../fileUploader/fileUploader';
import { Store } from '../../../core/Store';
import { updateAvatar } from '../../../services/user';

export class SettingsAvatarForm extends Block<Indexed> {
	constructor(props: Indexed) {
		const updateBtn = new Button({
			btnText: 'Update',
			btnType: 'button',
			asLink: true,
		});
		const fileUploader = new FileUploader({
			fileFormats: 'png,jpg,jpeg',
			fileMaxSize: 10000000,
		});

		super({ ...props, updateBtn, fileUploader });
	}

	componentDidMount() {
		const fileUploader = this.children.fileUploader as FileUploader
		fileUploader.onSubmit = () => {
			Store.dispatch(updateAvatar, fileUploader.files[0]);
		}

		(this.children.updateBtn as Block<Indexed>).setProps({
			events: {
				click: {
					handler: () => {
						fileUploader.emitClick();
					}
				}
			}
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
