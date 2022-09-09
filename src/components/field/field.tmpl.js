export function getTemplate() {
	return `
		<label class="formField">
			<span class="formField__label">{{name}}</span>
			<input type="{{type}}" class="formInput">
		</label>
	`;
}
