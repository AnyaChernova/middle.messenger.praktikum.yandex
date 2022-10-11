import { moonIcon } from '../icons/moon';
import { bellIcon } from '../icons/bell';

export const template: string = `
	<header class="header">
		<div class="header__wrap">
			<div class="header__left"></div>
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
