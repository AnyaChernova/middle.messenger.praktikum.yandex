export const template: string = `
	<button class="{{#if asLink}} link {{ else }} btn {{/if}} {{btnClass}}" type="{{btnType}}">
		{{#if btnIcon}}
			<span class="{{btnIconClass}}">{{{btnIcon}}}</span>
		{{/if}}
		<span>{{btnText}}</span>
	</button>`;
