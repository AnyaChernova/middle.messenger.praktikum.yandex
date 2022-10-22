export const template: string = `
	<button class="chatTab {{#if isActive}} chatTab--active {{/if}}">
		<div class="media chatTab__media">
			<div class="media__aside">{{{avatar}}}</div>
			<div class="media__main media__main--left">
				<div class="media__title media__title--l">{{title}}</div>
				{{#if lastMessage}}
					<div class="media__caption">
					<span class="text-primary">{{lastMessage.name}}:</span> {{lastMessage.content}}
					</div>
				{{else }}
				<div class="media__caption">Add users and start chatting!</div>
				{{/if}}
			</div>
		</div>
		<div class="chatTab__caption">{{lastMessage.time}}</div>
		{{#if unreadCount}}
			<div class="circle chatTab__counter"><span class="circle__inner">{{unreadCount}}</span></div>
		{{/if}}
	</button>`;
