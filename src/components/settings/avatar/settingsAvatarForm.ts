import Block from '../../../modules/Block';
import { template } from './settingsAvatarForm.tmpl';
import { Avatar } from '../../avatar/avatar';

type AvatarProps = { avatar: Avatar };

export class SettingsAvatarForm extends Block<AvatarProps> {
	constructor(props: AvatarProps) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
