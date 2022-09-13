export function getTemplateAvatarForm() {
	return `
	<div class="cells cells--gap cells--center fieldset__wrap">
		<div class="cell w-6/12">
			<div class="media">
				<div class="media__main">
					<div class="title title--xs">Your photo</div>
					<div class="mt-4 text-gray">This will be displayed on your profile.</div>
				</div>
				{{> avatar }}
			</div>
		</div>
		<div class="cell w-6/12 text-right">
			<button class="link link--gray mr-20">Delete</button>
			<button class="link">Update</button>
		</div>
	</div>`;
}
