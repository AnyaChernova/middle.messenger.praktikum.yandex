import { pencilIcon } from '../icons/pencil';
import { searchIcon } from '../icons/search';
import { moreIcon } from '../icons/more';

export const template: string = `
	<div class="chat">
		<div class="chat__aside">
			<div class="chat__header">
				<h2 class="title title--l">Messages</h2>
				<button class="btn btn--icon btn--primary">
					${pencilIcon}
				</button>
			</div>
			<div class="chat__search">
				<label class="searchField">
					<input class="formInput searchField__input" type="text" placeholder="Search...">
					<span class="searchField__icon">${searchIcon}</span>
				</label>
			</div>
			<div class="chat__tabs">
				{{#each tabs}}
					{{{this}}}
				{{/each}}
			</div>
		</div>
		<div class="chat__main">
			<div class="chatPanel">
				<div class="chatPanel__header">
					{{{user}}}
					<button class="btn btn--round">
						${moreIcon}
					</button>
				</div>
				<div class="chatPanel__inner">
					{{#each messages}}
						{{{this}}}
					{{/each}}
				</div>
				<div class="chatPanel__footer">
					{{{field}}}
				</div>
			</div>
		</div>
	</div>`;
