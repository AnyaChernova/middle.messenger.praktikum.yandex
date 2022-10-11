export const template: string = `
	<div class="nav navRow">
		<a href="/settings" class="nav__item navRow__item nav__item--accent
			{{#if page.profile}}
				nav__item--active
			{{/if}}">
			Profile
		</a>
		<a href="/settings-password" class="nav__item navRow__item nav__item--accent
			{{#if page.password}}
				nav__item--active
			{{/if}}">
			Password
		</a>
	</div>`;
