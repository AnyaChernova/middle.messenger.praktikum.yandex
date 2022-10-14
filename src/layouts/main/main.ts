import { Block } from '../../core/Block';
import { Aside } from '../../components/aside/aside';
import { Header } from '../../components/header/header';
import { Notice } from '../../components/notice/notice';
import { template } from './main.tmpl';
import { avatarHeaderData } from '../../pages/main/mocks';
import { AvatarUser } from '../../components/avatar/avatarUser';

export class MainLayout extends Block<Indexed> {
	constructor(props: Indexed) {
		const avatarProps = props.avatar || avatarHeaderData;
		super({
			...props,
			aside: new Aside({ links: props.links }),
			header: new Header({ avatar: new AvatarUser(avatarProps) }),
			notice: new Notice(),
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
