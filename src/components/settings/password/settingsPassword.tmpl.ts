export const template: string = `
	<form class="fieldset">
		<div class="fieldset__header fieldset__header--border">
			<h3 class="title title--m">Password</h3>
			<span class="fieldset__caption text-gray">Update your password here.</span>
		</div>
		<div class="cells gaps fieldset__wrap">
			{{#each fields}}
				<div class="cell gaps__item w-6/12">
					{{{this}}}
				</div>
				<div class="cell gaps__item w-6/12"></div>
			{{/each}}
			<div class="cell gaps__item w-6/12">{{{button}}}</div>
		</div>
	</form>`;
