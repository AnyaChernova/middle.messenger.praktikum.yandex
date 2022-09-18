import Field from "../../components/field/field";
import Auth from "../../components/auth/auth";
import FullLayout from "../../layouts/full/full";
import {fieldsList} from "./mocks";

const fieldsBlocks: Field[] = fieldsList.map((field) => new Field(field));
const authBlock = new Auth({fields: fieldsBlocks, isLogin: true});
const loginPage = new FullLayout({body: authBlock});


export default loginPage;
