import { Block } from '../../core/Block';
import { withStore } from '../../utils/withStore';
import { template } from './notice.tmpl';
import { store } from '../../core/Store';

type NoticeType = {
	noticeError?: string,
	noticeSuccess?: string,
};

class NoticeClass extends Block<NoticeType> {
	constructor(props: NoticeType) {
		super(props);
	}

	componentDidMount() {
		if (this.props.noticeSuccess || this.props.noticeError) {
			setTimeout(() => {
				this.hide();
			}, 5000);
		}
	}

	render() {
		return this.compile(template, { ...this.props });
	}

	hide() {
		store.dispatch({
			noticeError: '',
			noticeSuccess: '',
		});
	}
}

export const Notice = withStore(NoticeClass as typeof Block, (state) => ({
		noticeError: state.noticeError,
		noticeSuccess: state.noticeSuccess,
	}));
