import { removeIcon } from '../icons/remove';

export const template: string = `
	<button type="button" class="mediaWrap">
		<div class="media {{userClass}}">
			<div class="media__aside">{{{avatar}}}</div>
			<div class="media__main media__main--left">
				<div class="media__title {{titleClass}}">{{name}}</div>
				<div class="media__caption">{{caption}}</div>
			</div>
		</div>
		{{#if isRemove}}
		<div class="text-danger">${removeIcon}</div>
		{{/if}}
	</button>`;
