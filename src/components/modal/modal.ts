import { Block } from '../../core/Block';
import { template } from './modal.tmpl';
import { Button } from '../button/button';
import { closeIcon } from '../icons/close';

type ModalPropsType = {
	content?: Block<Indexed>,
	isOpen?: boolean,
	closeBtn?: Button,
}

export class Modal extends Block<ModalPropsType> {
	constructor(props: ModalPropsType) {
		const closeBtn = new Button({
				btnClass: 'modalContainer__close',
				btnIcon: closeIcon,
			});

		super({
			...props,
			closeBtn,
		});
	}

	componentDidMount() {
		(this.children.closeBtn as Button).setClick(() => {
			this.close();
		});
	}

	open() {
		this.setProps({ isOpen: true });
	}

	close () {
		this.setProps({ isOpen: false });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
