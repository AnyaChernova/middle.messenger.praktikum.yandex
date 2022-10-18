import { Block } from '../../core/Block';
import { template } from './modal.tmpl';
import { Button } from '../button/button';
import { closeIcon } from '../icons/close';
import { withStore } from '../../utils/withStore';
import { Store } from '../../core/Store';

type ModalPropsType = {
	content: () => typeof Block;
	activeModal: string;
};

class ModalClass extends Block<Indexed> {
	constructor(props: ModalPropsType) {
		const closeBtn = new Button({
				btnClass: 'modalContainer__close',
				btnIcon: closeIcon,
			});

		super({
			...props,
			closeBtn,
		});

		(this.children.closeBtn as Button).setClick(() => {
			Store.dispatch({ activeModal: '' });
		});
	}

	render() {
		this.children.content = this.props.content();
		const isOpen = this.props.activeModal === this.id;
		return this.compile(template, { ...this.props, isOpen });
	}
}

export const Modal = withStore(ModalClass as typeof Block, (state) => ({
		activeModal: state.activeModal,
	}));
