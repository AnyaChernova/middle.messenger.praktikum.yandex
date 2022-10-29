import { FullLayout } from '../../layouts/full/full';
import { AuthLoginForm } from '../../components/auth/authLoginForm';

export class LoginPage extends FullLayout {
	constructor() {
		super({ body: new AuthLoginForm() });
	}
}
