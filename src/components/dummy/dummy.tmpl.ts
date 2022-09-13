export function getTemplateDummy(): string {
	return `
		<div class="dummy text-center">
			<div class="title dummy__title">{{code}}</div>
			<div class="dummy__caption">{{title}}</div>
			<a href="/" class="link link--icon dummy__link">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
				Back to chats
			</a>
		</div>
	`;
}
