import { sendIcon } from '../../icons/send';

export const template: string = `
	<form class="chatField">
		<input class="formInput chatField__input" name="message" type="text" placeholder="Type Something...">
		{{{fileBtn}}}
		{{{fileUploader}}}
		<button class="btn btn--icon chatField__icon chatField__icon--right chatField__icon--primary">
			${sendIcon}
		</button>
	</form>`;
