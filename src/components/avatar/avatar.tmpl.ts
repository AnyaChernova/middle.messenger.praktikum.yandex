export const template: string = `
	<div class="avatar {{class}}">
		<img class="avatar__img" src="{{#if url}} {{url}} {{ else }} avatar.svg {{/if}}" width="{{size}}" height="{{size}}" alt="avatar">
	</div>`;
