export const template: string = `
		<div class="content">
			<div class="content__aside">
				{{{aside}}}
			</div>
			<div class="content__main">
				{{{header}}}
				<main class="content__wrap">
					<div class="content__inner {{innerClass}}">
						{{#if title}}
							<div class="content__header">
								<div class="content__title">
									<h2 class="title title--l">{{title}}</h2>
								</div>
								{{{nav}}}
							</div>
						{{/if}}
						{{{body}}}
					</div>
				</main>
			</div>
		</div>`;