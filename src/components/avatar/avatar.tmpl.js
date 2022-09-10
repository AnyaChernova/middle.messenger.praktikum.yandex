export function getTemplate() {
	return `
		<div class="avatar
			{{#if large}}
				avatar--l
			{{/if}}">
			<img class="avatar__img" src="{{url}}" width="{{size}}" height="{{size}}" alt="avatar">
		</div>
	`;
}
