import Field from "../../components/field/field";
import Auth from "../../components/auth/auth";
import FullLayout from "../../layouts/full/full";
import Button from "../../components/button/button";
import {fieldsList} from "./mocks";

const fieldsBlocks: Field[] = fieldsList.map((field) => new Field(field));
const buttonBlock = new Button({btnClass: 'w-full', btnText: 'Sign Up'});
const authBlock = new Auth({
	fields: fieldsBlocks,
	button: buttonBlock,
	isLogin: false
});
const registerPage = new FullLayout({body: authBlock});


export default registerPage;
