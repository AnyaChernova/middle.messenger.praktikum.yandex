import { logoIcon } from '../icons/logo';
import { envelopeIcon } from '../icons/envelope';
import { settingsIcon } from '../icons/settings';
import { exitIcon } from '../icons/exit';

export const template: string = `
	<aside class="aside">
		<div class="logo aside__top">
			${logoIcon}
			<div class="title logo__title">Logo</div>
		</div>
		<nav class="nav aside__nav">
			<a href="/" class="nav__item
				{{#if page.main}}
					nav__item--active
				{{/if}}">
				<span class="nav__icon">${envelopeIcon}</span>
				<span>Messages</span>
			</a>
			<a href="settings-profile.html" class="nav__item
				{{#if page.settings}}
					nav__item--active
				{{/if}}">
				<span class="nav__icon">${settingsIcon}</span>
				<span>Settings</span>
			</a>
			<a href="login.html" class="nav__item">
				<span class="nav__icon">${settingsIcon}</span>
				<span>Sign in</span>
			</a>
			<a href="register.html" class="nav__item">
				<span class="nav__icon">${settingsIcon}</span>
				<span>Sign up</span>
			</a>
			<a href="error.html" class="nav__item">
				<span class="nav__icon">${settingsIcon}</span>
				<span>Error</span>
			</a>
			<button class="nav__item nav__item--bottom">
				<span class="nav__icon">${exitIcon}</span>
				<span>Log out</span>
			</button>
		</nav>
	</aside>`;
