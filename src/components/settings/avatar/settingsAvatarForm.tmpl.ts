export const template: string = `
	<div class="cells cells--center gaps fieldset__wrap">
		<div class="cell gaps__item w-6/12">
			<article class="media media--reverse w-full">
				<main class="media__main media__main--right">
					<h3 class="title title--xs">Your photo</h3>
					<p class="media__caption media__caption--m">This will be displayed on your profile.</p>
				</main>
				<aside class="media__aside">{{{avatar}}}</aside>
			</article>
		</div>
		<div class="cell gaps__item w-6/12 text-right">
			{{{updateBtn}}}
			{{{fileUploader}}}
		</div>
	</div>`;
