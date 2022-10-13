import { Block } from '../../core/Block';
import { StoreEvents, Store } from '../../core/Store';
import { withStore } from '../../utils/withStore';
import { template } from './notice.tmpl';

type NoticeType = {
	noticeClass?: string,
	noticeText?: string,
	store?: typeof Store,
	isShow?: boolean,
}

class NoticeClass extends Block<NoticeType> {
	constructor(props: NoticeType) {
		super(props);

		this.props.store!.on(StoreEvents.Updated, () => {
			if (this.props.store!.getState().noticeError) {
				this.error(this.props.store!.getState().noticeError);
			}
			if (this.props.store!.getState().noticeSuccess) {
				this.success(this.props.store!.getState().noticeSuccess);
			}
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}

	error(message: string) {
		this.setProps({
			isShow: true,
			noticeClass: 'notice--error',
			noticeText: message,
		});

		setTimeout(() => {
			this.hide();
		}, 5000);
	}

	success(message: string) {
		this.setProps({
			isShow: true,
			noticeClass: 'notice--success',
			noticeText: message,
		});

		setTimeout(() => {
			this.hide();
		}, 5000);
	}

	hide() {
		this.setProps({
			isShow: false,
			noticeClass: '',
			noticeText: '',
		});
		this.props.store!.dispatch({noticeError: ''});
		this.props.store!.dispatch({noticeSuccess: ''});
	}
}

export const Notice = withStore(NoticeClass as typeof Block);
