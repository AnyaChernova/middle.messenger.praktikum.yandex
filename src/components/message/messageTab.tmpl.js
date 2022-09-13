export function getTemplateMessageTab() {
	return `
		<button class="chatTab {{tabClass}}">
			<div class="media chatTab__media">
				<div class="media__aside">{{> avatar user }}</div>
				<div class="media__main media__main--left">
					<div class="media__title media__title--l">{{name}}</div>
					<div class="media__caption">{{text}}</div>
				</div>
			</div>
			<span class="chatTab__caption">{{time}}</span>
			{{#if newCounter}}
				<div class="circle chatTab__counter"><span class="circle__inner">{{newCounter}}</span></div>
			{{/if}}
		</button>
	`;
}
