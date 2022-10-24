import { Block } from '../../core/Block';
import { template } from './modal.tmpl';
import { Button } from '../button/button';
import { closeIcon } from '../icons/close';
import { withStore } from '../../utils/withStore';
import { store } from '../../core/Store';

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
			this._closeModal();
		});
	}

	private _closeModal = () => {
		store.dispatch({ activeModal: '' });
	};

	private _setOverlayClick() {
		const overlay = this.element!.querySelector('.modalContainer__overlay');
		if (overlay) {
			overlay.addEventListener('click', this._closeModal);
		}
	}

	componentDidMount() {
		this._setOverlayClick();
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
