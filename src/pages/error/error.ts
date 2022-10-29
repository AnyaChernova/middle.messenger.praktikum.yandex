import { Dummy } from '../../components/dummy/dummy';
import { FullLayout } from '../../layouts/full/full';

export class ErrorPage extends FullLayout {
	constructor() {
		const errorBlock = new Dummy();

		super({ body: errorBlock });
	}
}
