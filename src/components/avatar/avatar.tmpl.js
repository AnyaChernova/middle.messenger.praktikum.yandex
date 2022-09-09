export function getTemplate() {
	return `
		<div class="avatar
			{{#if large}}
				avatar--l
			{{/if}}">
			<img src="{{url}}" alt="avatar">
		</div>
	`;
}
