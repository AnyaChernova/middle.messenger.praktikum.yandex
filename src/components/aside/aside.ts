import { Block } from '../../core/Block';
import { template } from './aside.tmpl';
import { Button } from '../button/button';
import { exitIcon } from '../icons/exit';
import { logout } from '../../services/auth';
import { withStore } from '../../utils/withStore';

class AsideClass extends Block<Indexed> {
	constructor(props: Indexed) {
		const logoutBtn = new Button({
			btnClass: 'nav__item nav__item--bottom',
			btnText: 'Log out',
			btnIcon: exitIcon,
			btnIconClass: 'nav__icon',
			events: {
				click: {
					handler: () => {
						this.props.store.dispatch(logout);
					}
				}
			}
		});

		super({ ...props, logoutBtn });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const Aside = withStore(AsideClass as typeof Block);
