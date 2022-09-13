export function getTemplateAvatar(): string {
	return `
		<div class="avatar {{class}}">
			<img class="avatar__img" src="{{url}}" width="{{size}}" height="{{size}}" alt="avatar">
		</div>
	`;
}