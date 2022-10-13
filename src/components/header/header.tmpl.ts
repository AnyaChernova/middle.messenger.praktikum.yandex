import { moonIcon } from '../icons/moon';
import { bellIcon } from '../icons/bell';
import { searchIcon } from '../icons/search';

export const template: string = `
	<header class="header">
		<div class="header__wrap">
			<div class="header__left">
				<label class="searchField">
					<input class="formInput searchField__input" type="text" placeholder="Search user...">
					<span class="searchField__icon">${searchIcon}</span>
				</label>
			</div>
			<div class="header__right">
				<button class="btn btn--icon mr-16">
					${moonIcon}
				</button>
				<button class="btn btn--icon">
					${bellIcon}
				</button>
				{{{avatar}}}
			</div>
		</div>
	</header>`;
