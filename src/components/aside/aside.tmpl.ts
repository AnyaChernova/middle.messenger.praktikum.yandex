import { logoIcon } from '../icons/logo';

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
			{{{logoutBtn}}}
		</nav>
	</aside>`;
