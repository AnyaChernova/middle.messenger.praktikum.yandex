export const template: string = `
	<form class="fieldset">
		<div class="fieldset__header fieldset__header--border">
			<h3 class="title title--m">Profile</h3>
			<span class="fieldset__caption text-gray">Update your photo and personal details here.</span>
		</div>
		<div class="cells gaps fieldset__wrap">
			{{#each fields}}
				<div class="cell gaps__item w-6/12">
					{{{this}}}
				</div>
			{{/each}}
		</div>
		<div class="fieldset__footer fieldset__footer--border">{{{avatarForm}}}</div>
		<div class="content__footer">{{{button}}}</div>
	</form>`;
