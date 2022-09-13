import Handlebars from "handlebars";
import {registerAvatar} from "./components/avatar/avatar";
import {registerHeader} from "./components/header/header";
import {registerAside} from "./components/aside/aside";
import {registerField} from "./components/field/field";
import {registerDummy} from "./components/dummy/dummy";
import {registerMessage, registerMessageTab} from "./components/message/message";
import {renderMainPage} from "./pages/main/main";
import {renderSettingsPage} from "./pages/settings/settings";
import {renderLoginPage} from "./pages/login/login";
import {renderRegisterPage} from "./pages/register/register";
import {renderErrorPage} from "./pages/error/error";

Handlebars.registerHelper("if", function(this: any, conditional, options) {
	if (conditional) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

registerAvatar();
registerHeader();
registerAside();
registerField();
registerDummy();
registerMessage();
registerMessageTab();
renderMainPage();
renderSettingsPage();
renderLoginPage();
renderRegisterPage();
renderErrorPage();
