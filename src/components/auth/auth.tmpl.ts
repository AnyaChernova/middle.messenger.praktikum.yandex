export const template: string = `
	<form class="formBox">
		<div class="formBox__header">
			<h2 class="title title--l">Get’s started.</h2>
			<div class="formBox__caption text-gray">
				{{#if isLogin}}
					Don’t have an account? {{{link}}}
				{{else}}
					Already have an account? {{{link}}}
				{{/if}}
			</div>
		</div>
		<div class="formCard">
			{{#each fields}}
				{{{this}}}
			{{/each}}
		</div>
		<div class="formBox__footer">{{{button}}}</div>
	</form>`;
