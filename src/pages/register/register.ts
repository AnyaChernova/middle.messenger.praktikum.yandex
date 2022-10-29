import { FullLayout } from '../../layouts/full/full';
import { AuthRegisterForm } from '../../components/auth/authRegisterForm';

export class RegisterPage extends FullLayout {
	constructor() {
		super({ body: new AuthRegisterForm() });
	}
}
