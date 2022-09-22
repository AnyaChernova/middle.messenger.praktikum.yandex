import { clipIcon } from '../icons/clip';
import { sendIcon } from '../icons/send';

export const template: string = `
	<form class="chatField">
		<input class="formInput chatField__input" name="{{name}}" type="{{type}}" placeholder="Type Something...">
		<button class="btn btn--icon chatField__icon" type="button">
			${clipIcon}
		</button>
		<button class="btn btn--icon chatField__icon chatField__icon--right chatField__icon--primary">
			${sendIcon}
		</button>
	</form>`;
