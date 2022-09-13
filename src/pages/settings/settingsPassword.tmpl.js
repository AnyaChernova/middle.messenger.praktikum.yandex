export function getTemplatePassword() {
	return `
		<div class="fieldset">
			<div class="fieldset__header fieldset__header--border">
				<h3 class="title title--m">Password</h3>
				<div class="fieldset__caption text-gray">Update your password here.</div>
			</div>
			<div class="cells gaps fieldset__wrap">
				{{#each fields}}
					<div class="cell gaps__item w-6/12">
						{{> field }}
					</div>
					<div class="cell gaps__item w-6/12"></div>
				{{/each}}
				<div class="cell gaps__item w-6/12">
					<button class="btn w-full">Save</button>
				</div>
			</div>
		</div>
	`;
}
