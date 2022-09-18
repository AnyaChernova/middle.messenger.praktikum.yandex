import Field from "../../components/field/field";
import Auth from "../../components/auth/auth";
import FullLayout from "../../layouts/full/full";
import {fieldsList} from "./mocks";
import Button from "../../components/button/button";

const fieldsBlocks: Field[] = fieldsList.map((field) => new Field(field));
const buttonBlock = new Button({
	btnClass: 'w-full',
	btnText: 'Sign In',
});
const authBlock = new Auth({
	fields: fieldsBlocks,
	button: buttonBlock,
	isLogin: true
});
const loginPage = new FullLayout({body: authBlock});


export default loginPage;
