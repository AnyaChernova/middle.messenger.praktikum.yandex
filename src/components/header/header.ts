import { Block } from '../../core/Block';
import { template } from './header.tmpl';
import { AvatarUser } from '../avatar/avatarUser';
import { Button } from '../button/button';
import { moonIcon } from '../icons/moon';
import { sunIcon } from '../icons/sun';

export class Header extends Block<Indexed> {
	constructor() {
		super({
			avatar: new AvatarUser(),
			btnLeft: new Button({
				btnClass: 'btn--icon btn--headerLeft mr-16',
				btnIcon: moonIcon,
				events: {
					click: {
						handler: () => document.querySelector('.page')!.classList.add('page--dark')
					}
				}
			}),
			btnRight: new Button({
				btnClass: 'btn--icon btn--headerRight',
				btnIcon: sunIcon,
				events: {
					click: {
						handler: () => document.querySelector('.page')!.classList.remove('page--dark')
					}
				}
			}),
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
