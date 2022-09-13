export function getTemplateAvatarForm() {
	return `
	<div class="cells cells--center gaps fieldset__wrap">
		<div class="cell gaps__item w-6/12">
			<div class="media media--reverse w-full">
				<div class="media__main media__main--right">
					<div class="title title--xs">Your photo</div>
					<div class="mt-4 text-gray">This will be displayed on your profile.</div>
				</div>
				<div class="media__aside">{{> avatar }}</div>
			</div>
		</div>
		<div class="cell gaps__item w-6/12 text-right">
			<button class="link link--gray mr-20">Delete</button>
			<button class="link">Update</button>
		</div>
	</div>`;
}
