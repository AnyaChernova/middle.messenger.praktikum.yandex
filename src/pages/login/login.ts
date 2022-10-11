import { FieldValidate } from '../../components/field/fieldValidate';
import { Auth } from '../../components/auth/auth';
import { FullLayout } from '../../layouts/full/full';
import { Button } from '../../components/button/button';
import { fieldsList } from './mocks';

const fieldsBlocks: FieldValidate[] = fieldsList.map((field) => new FieldValidate(field));

const buttonBlock = new Button({
	btnClass: 'w-full',
	btnText: 'Sign In',
});

const authBlock = new Auth({
	fields: fieldsBlocks,
	button: buttonBlock,
	isLogin: true,
});

export const loginPage = new FullLayout({ body: authBlock });
