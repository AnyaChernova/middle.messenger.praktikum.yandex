export const template: string = `
	<div class="chatPanel__item chatPanel__item--bottom {{itemClass}}">
		{{#if day}}
		<div class="chatPanel__day">{{day}}</div>
		{{/if}}
		<div class="media {{mediaClass}}">
			{{#if avatar}}
				<div class="media__aside">{{{avatar}}}</div>
			{{/if}}
			<div class="media__main {{mainClass}}">
				<div class="message {{messageClass}}">
				{{#if title}}
					<div class="text-mid">{{title}}</div>
				{{/if}}
				{{#if file}}
					{{#if isImg}}
					<img class="message__img" src="{{file.path}}" alt="{{file.filename}}">
					{{else }}
					<a class="link message__link" href="{{file.path}}" target="_blank">{{file.filename}}</a>
					{{/if}}
				{{else }}
				{{content}}
				{{/if}}
				<span class="message__time message__caption">{{time}}</span>
				</div>
			</div>
		</div>
	</div>`;
