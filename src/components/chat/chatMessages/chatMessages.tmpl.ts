import { spinnerIcon } from '../../icons/spinner';

export const template: string = `
	<div class="chatPanel__inner">
		{{#each messages}}
			{{{this}}}
		{{/each}}
		{{#if loading}}
		<div class="chatPanel__loading">${spinnerIcon}</div>
		{{/if}}
	</div>`;
