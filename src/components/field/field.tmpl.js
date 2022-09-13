export function getTemplate() {
	return `
		<label class="formField {{inputClass}}">
			<span class="formField__label {{labelClass}}">{{name}}</span>
			<input type="{{type}}" class="formInput">
		</label>
	`;
}
