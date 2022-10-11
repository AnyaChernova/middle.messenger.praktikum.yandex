import Block from '../../../modules/Block';
import { template } from './settingsNav.tmpl';
import { PageType } from '../../../utils/types';

type NavProps = { page: PageType };

export class SettingsNav extends Block<NavProps> {
	constructor(props: NavProps) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
