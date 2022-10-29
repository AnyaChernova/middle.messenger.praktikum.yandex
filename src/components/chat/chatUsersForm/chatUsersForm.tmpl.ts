import { searchIcon } from '../../icons/search';
import { spinnerIcon } from '../../icons/spinner';

export const template: string = `
	<form class="formBox formBox--modal">
		<div class="formBox__header">
			<h3 class="title title--m">Chat users</h3>
		</div>
		<div class="dropdown">
				<label class="searchField">
					<input class="formInput searchField__input" type="text" placeholder="Search user...">
					{{#if searchLoading}}
						<span class="searchField__icon searchField__loader">${spinnerIcon}</span>
					{{else }}
						<span class="searchField__icon">${searchIcon}</span>
					{{/if}}
				</label>
				<div class="dropdown__content dropdown__list">
					{{#each searchUsers}}
						<div class="dropdown__item">
						{{{this}}}
						</div>
					{{/each}}
				</div>
			</div>
		<ul class="list formBox__list">
			{{#each selectedUsers}}
				<li class="list__item">
					{{{this}}}
				</li>
			{{/each}}
		</ul>
		<div class="formBox__footer">{{{button}}}</div>
	</form>`;
