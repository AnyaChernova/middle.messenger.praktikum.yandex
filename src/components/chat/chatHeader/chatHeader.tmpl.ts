import { moreIcon } from '../../icons/more';
import { plusIcon } from '../../icons/plus';
import { removeIcon } from '../../icons/remove';
import { minusIcon } from '../../icons/minus';

export const template: string = `
	<div class="chatPanel__header">
		<div class="media chatTab__media">
				{{#if title}}
				<div class="media__aside">{{{avatar}}}</div>
				<div class="media__main media__main--left">
					<div class="media__title">{{title}}</div>
				</div>
				{{/if}}
		</div>
		<div class="dropdown">
			<button class="btn btn--round">
				${moreIcon}
			</button>
			<div class="dropdown__content">
				<button class="dropdown__item dropdown__item--primary">
					${plusIcon}
					<span class="dropdown__text">Add user</span>
				</button>
				<button class="dropdown__item">
					${minusIcon}
					<span class="dropdown__text">Delete user</span>
				</button>
				<button class="dropdown__item dropdown__item--danger">
					${removeIcon}
					<span class="dropdown__text">Delete chat</span>
				</button>
			</div>
		</div>
	</div>`;
