import { MainLayout } from '../../layouts/main/main';
import { Dummy } from '../../components/dummy/dummy';
import { errorData } from './mocks';

export class ErrorPage extends MainLayout {
	constructor() {
		const errorBlock = new Dummy(errorData);

		super({ innerClass: 'content__inner--center', body: errorBlock });
	}
}
