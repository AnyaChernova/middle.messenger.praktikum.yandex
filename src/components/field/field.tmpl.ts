export const template: string = `
	<label class="formField {{fieldClass}}">
		<span class="formField__label {{labelClass}}">{{title}}</span>
		<input type="{{type}}" name="{{name}}" value="{{value}}" class="formInput {{inputClass}}">
		<span class="formField__error"></span>
	</label>`;
