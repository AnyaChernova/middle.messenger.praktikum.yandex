export const template: string = `
	<button class="{{linkClass}} {{activeClass}}">
		{{#if linkIcon}}
			<span class="{{linkIconClass}}">{{{linkIcon}}}</span>
		{{/if}}
		<span>{{linkText}}</span>
	</button>`;
