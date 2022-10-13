import { Block } from '../../core/Block';
import { Aside } from '../../components/aside/aside';
import { Header } from '../../components/header/header';
import { Avatar } from '../../components/avatar/avatar';
import { Notice } from '../../components/notice/notice';
import { template } from './main.tmpl';
import { avatarHeaderData } from '../../pages/main/mocks';

export class MainLayout extends Block<Indexed> {
	constructor(props: Indexed) {
		const avatarProps = props.avatar || avatarHeaderData;
		const asideBlock = new Aside({ links: props.links });
		const headerBlock = new Header({ avatar: new Avatar(avatarProps) });
		const noticeBlock = new Notice();
		super({
			...props,
			aside: asideBlock,
			header: headerBlock,
			notice: noticeBlock,
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
