export const template: string = `
	<button class="{{linkClass}} {{activeClass}}" type="button">
		{{#if linkIcon}}
			<span class="{{linkIconClass}}">{{{linkIcon}}}</span>
		{{/if}}
		<span>{{linkText}}</span>
	</button>`;
