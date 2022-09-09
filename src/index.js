import Handlebars from "handlebars";
import {calcScreenHeight} from "./utils/calc-screen-height";
import {registerAvatar} from "./components/avatar/avatar";
import {registerHeader} from "./components/header/header";
import {registerAside} from "./components/aside/aside";
import {registerField} from "./components/field/field";
import {renderMainPage} from "./pages/main/main";
import {renderSettingsPage} from "./pages/settings/settings";
import {renderLoginPage} from "./pages/login/login";
import {renderRegisterPage} from "./pages/register/register";
import {renderErrorPage} from "./pages/error/error";

Handlebars.registerHelper("if", function(conditional, options) {
	if (conditional) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

calcScreenHeight();
registerAvatar();
registerHeader();
registerAside();
registerField();
renderMainPage();
renderSettingsPage();
renderLoginPage();
renderRegisterPage();
renderErrorPage();
