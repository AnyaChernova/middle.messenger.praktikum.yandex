export const template: string = `
	<button class="chatTab {{#if isActive}} chatTab--active {{/if}}">
		<article class="media chatTab__media">
			<aside class="media__aside">{{{avatar}}}</aside>
			<main class="media__main media__main--left">
				<h3 class="media__title media__title--l">{{title}}</h3>
				{{#if lastMessage}}
					<p class="media__caption">
						<span class="text-primary">{{lastMessage.name}}:</span> {{lastMessage.content}}
					</p>
				{{else }}
				<div class="media__caption">Add users and start chatting!</div>
				{{/if}}
			</main>
		</article>
		<div class="chatTab__caption">{{lastMessage.time}}</div>
		{{#if unreadCount}}
			<div class="circle chatTab__counter"><span class="circle__inner">{{unreadCount}}</span></div>
		{{/if}}
	</button>`;
