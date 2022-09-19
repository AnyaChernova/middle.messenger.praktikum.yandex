import MainLayout from '../../layouts/main/main';
import Dummy from '../../components/dummy/dummy';
import { errorData } from './mocks';

const errorBlock = new Dummy(errorData);
const errorPage = new MainLayout({
	innerClass: 'content__inner--center',
	body: errorBlock,
});

export default errorPage;
