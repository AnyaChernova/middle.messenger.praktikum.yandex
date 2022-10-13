import { Block } from '../../core/Block';
import { StoreEvents, Store } from '../../core/Store';
import { withStore } from '../../utils/withStore';
import { template } from './notice.tmpl';

type NoticeType = {
	noticeClass?: string,
	noticeText?: string,
	noticeError?: string,
	noticeSuccess?: string,
	isShow?: boolean,
}

class NoticeClass extends Block<NoticeType> {
	constructor(props: NoticeType) {
		super(props);

		Store.on(StoreEvents.Updated, this.onStoreUpdate);
	}

	onStoreUpdate = () => {
		if (this.props.noticeError) {
			this.error(this.props.noticeError);
		}
		if (this.props.noticeSuccess) {
			this.success(this.props.noticeSuccess);
		}
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
	}
}

export const Notice = withStore(NoticeClass as typeof Block, (state) => {
	return {
		noticeError: state.noticeError,
		noticeSuccess: state.noticeSuccess,
	};
});
