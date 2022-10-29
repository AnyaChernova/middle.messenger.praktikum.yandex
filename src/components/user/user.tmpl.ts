import { removeIcon } from '../icons/remove';

export const template: string = `
	<button type="button" class="mediaWrap">
		<article class="media {{userClass}}">
			<aside class="media__aside">{{{avatar}}}</aside>
			<main class="media__main media__main--left">
				<h3 class="media__title {{titleClass}}">{{name}}</h3>
				<span class="media__caption">{{caption}}</span>
			</main>
		</article>
		{{#if isRemove}}
		<div class="text-danger">${removeIcon}</div>
		{{/if}}
	</button>`;
