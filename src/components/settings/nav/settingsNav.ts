import Block from '../../../modules/Block';
import { template } from './settingsNav.tmpl';
import { pageType } from '../../../utils/types';

class SettingsNav extends Block {
	constructor(props: { page: pageType }) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export default SettingsNav;
