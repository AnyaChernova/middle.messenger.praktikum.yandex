export const template: string = `
	<div class="chatPanel__item {{itemClass}}">
		<div class="media {{mediaClass}}">
			{{#if avatar}}
				<div class="media__aside">{{{avatar}}}</div>
			{{/if}}
			<div class="media__main {{mainClass}}">
				<div class="message {{messageClass}}">{{text}}</div>
			</div>
		</div>
	</div>`;
