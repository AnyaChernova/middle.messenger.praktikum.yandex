export const template: string = `
	<div class="chatPanel__item chatPanel__item--bottom {{itemClass}}">
		{{#if day}}
		<p class="chatPanel__day">{{day}}</p>
		{{/if}}
		<article class="media {{mediaClass}}">
			{{#if avatar}}
				<aside class="media__aside">{{{avatar}}}</aside>
			{{/if}}
			<main class="media__main {{mainClass}}">
				<div class="message {{messageClass}}">
				{{#if title}}
					<h3 class="title title--text">{{title}}</h3>
				{{/if}}
				{{#if file}}
					{{#if isImg}}
					<img class="message__img" src="{{file.path}}" alt="{{file.filename}}">
					{{else }}
					<a class="link message__link" href="{{file.path}}" target="_blank">{{file.filename}}</a>
					{{/if}}
				{{else }}
				<p class="message__content">{{content}}</p>
				{{/if}}
				<span class="message__time message__caption">{{time}}</span>
				</div>
			</main>
		</article>
	</div>`;
