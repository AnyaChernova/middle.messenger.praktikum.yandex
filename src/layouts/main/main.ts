import Block from '../../modules/Block';
import Aside from '../../components/aside/aside';
import Header from '../../components/header/header';
import Avatar from '../../components/avatar/avatar';
import { template } from './main.tmpl';
import { avatarHeaderData, pageData } from '../../pages/main/mocks';
import { avatarType, pageType } from '../../utils/types';

class MainLayout extends Block {
	constructor(props: Record<string, string | Block | pageType>) {
		const pageProps = props.page || pageData;
		const avatarProps = props.avatar || avatarHeaderData;
		const asideBlock = new Aside({ page: pageProps as pageType });
		const headerBlock = new Header({ avatar: new Avatar(avatarProps as avatarType) });
		super({ aside: asideBlock, header: headerBlock, ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export default MainLayout;
