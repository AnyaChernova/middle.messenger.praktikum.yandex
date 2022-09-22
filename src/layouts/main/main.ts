import Block from '../../modules/Block';
import { Aside } from '../../components/aside/aside';
import { Header } from '../../components/header/header';
import { Avatar } from '../../components/avatar/avatar';
import { SettingsNav } from '../../components/settings/nav/settingsNav';
import { template } from './main.tmpl';
import { avatarHeaderData, pageData } from '../../pages/main/mocks';
import { AvatarType, PageType } from '../../utils/types';

type layoutProps = {
	title?: string,
	innerClass?: string,
	page?: PageType,
	aside?: Aside,
	header?: Header,
	avatar?: AvatarType,
	nav?: SettingsNav,
	body: Block<any>,
};

export class MainLayout extends Block<layoutProps> {
	constructor(props: layoutProps) {
		const pageProps = props.page || pageData;
		const avatarProps = props.avatar || avatarHeaderData;
		const asideBlock = new Aside({ page: pageProps });
		const headerBlock = new Header({ avatar: new Avatar(avatarProps) });
		super({ aside: asideBlock, header: headerBlock, ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
