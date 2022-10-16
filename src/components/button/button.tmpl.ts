import { spinnerIcon } from '../icons/spinner';

export const template: string = `
	<button class="{{#if asLink}} link {{ else }} btn {{/if}} {{#if isLoading}} btn--loading {{/if}}  {{btnClass}}" type="{{btnType}}">
		<span class="btn__loader">${spinnerIcon}</span>
		{{#if btnIcon}}
			<span class="{{btnIconClass}}">{{{btnIcon}}}</span>
		{{/if}}
		<span class="btn__text">{{btnText}}</span>
	</button>`;
