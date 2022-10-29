export const template: string = `
	<div class="avatar {{class}}">
		{{#if url }}
			<img class="avatar__img" src="{{url}}" width="{{size}}" height="{{size}}" alt="avatar">
		{{else}}
			{{title}}
		{{/if}}
	</div>`;
