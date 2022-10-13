export const template: string = `
	<button class="btn {{btnClass}}">
		{{#if btnIcon}}
			<span class="{{btnIconClass}}">{{{btnIcon}}}</span>
		{{/if}}
		<span>{{btnText}}</span>
	</button>`;
