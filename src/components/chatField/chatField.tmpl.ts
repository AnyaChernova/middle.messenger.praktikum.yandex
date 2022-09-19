export const template: string = `
	<form class="chatField">
		<input class="formInput chatField__input" name="{{name}}" type="{{type}}" placeholder="Type Something...">
		<button class="btn btn--icon chatField__icon" type="button">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M18.2711 12.3978L12.0911 18.5878C11.2809 19.3078 10.2262 19.691 9.1428 19.6591C8.05938 19.6272 7.02908 19.1826 6.26265 18.4162C5.49622 17.6497 5.05159 16.6195 5.01969 15.536C4.9878 14.4526 5.37106 13.3979 6.09108 12.5878L14.0911 4.58775C14.5687 4.13405 15.2023 3.88108 15.8611 3.88108C16.5198 3.88108 17.1535 4.13405 17.6311 4.58775C18.0964 5.05934 18.3573 5.69522 18.3573 6.35775C18.3573 7.02028 18.0964 7.65616 17.6311 8.12775L10.7311 15.0178C10.6628 15.0913 10.5807 15.1507 10.4895 15.1925C10.3982 15.2343 10.2996 15.2577 10.1994 15.2614C10.0991 15.2651 9.99904 15.2491 9.90496 15.2141C9.81089 15.1792 9.72462 15.126 9.65108 15.0578C9.57754 14.9895 9.51817 14.9074 9.47636 14.8161C9.43455 14.7249 9.41112 14.6263 9.4074 14.526C9.40369 14.4257 9.41976 14.3257 9.45471 14.2316C9.48966 14.1376 9.54279 14.0513 9.61108 13.9778L14.7411 8.85775C14.9294 8.66945 15.0352 8.41405 15.0352 8.14775C15.0352 7.88145 14.9294 7.62605 14.7411 7.43775C14.5528 7.24945 14.2974 7.14366 14.0311 7.14366C13.7648 7.14366 13.5094 7.24945 13.3211 7.43775L8.19108 12.5778C7.93438 12.8325 7.73064 13.1355 7.59161 13.4693C7.45257 13.8031 7.38099 14.1611 7.38099 14.5228C7.38099 14.8844 7.45257 15.2424 7.59161 15.5762C7.73064 15.91 7.93438 16.213 8.19108 16.4678C8.71545 16.9672 9.41189 17.2458 10.1361 17.2458C10.8603 17.2458 11.5567 16.9672 12.0811 16.4678L18.9711 9.56775C19.766 8.7147 20.1987 7.58642 20.1781 6.42062C20.1576 5.25481 19.6853 4.1425 18.8608 3.31802C18.0363 2.49354 16.924 2.02127 15.7582 2.0007C14.5924 1.98013 13.4641 2.41287 12.6111 3.20775L4.61108 11.2078C3.53228 12.4026 2.95611 13.9676 3.00261 15.5767C3.04912 17.1859 3.71471 18.715 4.86072 19.8455C6.00672 20.9761 7.54475 21.6208 9.15436 21.6454C10.764 21.6701 12.321 21.0727 13.5011 19.9778L19.6911 13.7978C19.7843 13.7045 19.8583 13.5938 19.9087 13.472C19.9592 13.3502 19.9852 13.2196 19.9852 13.0878C19.9852 12.9559 19.9592 12.8253 19.9087 12.7035C19.8583 12.5817 19.7843 12.471 19.6911 12.3778C19.5978 12.2845 19.4872 12.2106 19.3653 12.1601C19.2435 12.1096 19.1129 12.0837 18.9811 12.0837C18.8492 12.0837 18.7187 12.1096 18.5968 12.1601C18.475 12.2106 18.3643 12.2845 18.2711 12.3778V12.3978Z" fill="currentColor"/>
			</svg>
		</button>
		<button class="btn btn--icon chatField__icon chatField__icon--right chatField__icon--primary">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4322 4.0612C20.8183 3.8998 21.22 4.25585 21.1062 4.65856L16.9945 19.2003C16.9069 19.5104 16.553 19.6578 16.2711 19.5016L11.9004 17.0806L8.57687 20.0765L9.08837 15.8618L9.25236 15.6138L9.23723 15.6055L17.8407 7.21288L6.89056 14.3056L3.07739 12.1934C2.7118 11.9909 2.74124 11.4559 3.12684 11.2947L20.4322 4.0612Z" fill="currentColor"/>
			</svg>
		</button>
	</form>`;