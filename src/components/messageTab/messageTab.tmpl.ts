export const template: string = `
	<button class="chatTab {{tabClass}}">
		{{{user}}}
		<span class="chatTab__caption">{{time}}</span>
		{{#if newCounter}}
			<div class="circle chatTab__counter"><span class="circle__inner">{{newCounter}}</span></div>
		{{/if}}
	</button>`;
