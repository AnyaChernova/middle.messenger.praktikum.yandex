import { logoIcon } from '../icons/logo';
import { exitIcon } from '../icons/exit';

export const template: string = `
	<aside class="aside">
		<div class="logo aside__top">
			${logoIcon}
			<div class="title logo__title">Logo</div>
		</div>
		<nav class="nav aside__nav">
			{{#each links}}
				{{{this}}}
			{{/each}}
			<button class="nav__item nav__item--bottom">
				<span class="nav__icon">${exitIcon}</span>
				<span>Log out</span>
			</button>
		</nav>
	</aside>`;
