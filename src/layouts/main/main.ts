import Block from '../../modules/Block';
import { Aside } from '../../components/aside/aside';
import { Header } from '../../components/header/header';
import { Avatar } from '../../components/avatar/avatar';
import { SettingsNav } from '../../components/settings/nav/settingsNav';
import { template } from './main.tmpl';
import { avatarHeaderData } from '../../pages/main/mocks';
import { AvatarType } from '../../utils/types';
import { Link } from '../../components/link/link';

type LayoutProps = {
	title?: string,
	innerClass?: string,
	aside?: Aside,
	links?: Link[],
	header?: Header,
	avatar?: AvatarType,
	nav?: SettingsNav,
	body: Block<any>,
};

export class MainLayout extends Block<LayoutProps> {
	constructor(props: LayoutProps) {
		const avatarProps = props.avatar || avatarHeaderData;
		const asideBlock = new Aside({ links: props.links });
		const headerBlock = new Header({ avatar: new Avatar(avatarProps) });
		super({ aside: asideBlock, header: headerBlock, ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
