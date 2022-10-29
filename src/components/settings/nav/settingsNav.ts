import { Block } from '../../../core/Block';
import { template } from './settingsNav.tmpl';
import { LinkType } from '../../../utils/types';

type NavProps = { links: Block<LinkType>[] };

export class SettingsNav extends Block<NavProps> {
	constructor(props: NavProps) {
		super(props);
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
