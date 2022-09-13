export function getTemplateMessage() {
	return `
		<div class="media {{mediaClass}}">
			{{#if user}}
				<div class="media__aside">{{> avatar user }}</div>
			{{/if}}
			<div class="media__main {{mainClass}}">
				<div class="message {{messageClass}}">{{text}}</div>
			</div>
		</div>
	`;
}
