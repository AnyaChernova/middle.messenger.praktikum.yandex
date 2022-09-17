export const template: string = `
		<aside class="aside">
			<div class="logo aside__top">
				<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect y="0.0751953" width="26.914" height="26.85" rx="6" fill="#A162F7"/>
					<path d="M9.1273 19.7072L10.8492 17.9853C6.48698 15.345 7.21403 11.3367 8.12284 9.66258L13.5039 14.9002L18.885 9.66258C20.9513 14.1396 17.8805 17.0287 16.0868 17.9136L17.9523 19.7072C24.6248 14.6849 21.3961 7.94063 18.885 6.0752L13.5039 11.4563L7.97934 6.0752C2.09602 11.815 6.25741 18.2723 9.1273 19.7072Z" fill="white"/>
				</svg>
				<div class="title logo__title">Logo</div>
			</div>
			<nav class="nav aside__nav">
				<a href="/" class="nav__item
					{{#if page.main}}
						nav__item--active
					{{/if}}">
					<svg class="nav__icon" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83268 13.2514V15.8296L10.0512 13.3368L10.4921 13.3296C12.2454 13.3009 13.8232 13.1244 15.003 12.9449C15.7476 12.8316 16.2649 12.3119 16.3773 11.6594C16.5332 10.7544 16.666 9.60776 16.666 8.33366C16.666 7.05956 16.5332 5.91293 16.3773 5.00788C16.2649 4.35539 15.7476 3.83576 15.003 3.72247C13.7126 3.52613 11.948 3.33366 9.99935 3.33366C8.05074 3.33366 6.28608 3.52613 4.9957 3.72247C4.25113 3.83576 3.73377 4.3554 3.62138 5.00788C3.46548 5.91293 3.33268 7.05956 3.33268 8.33366C3.33268 9.60776 3.46548 10.7544 3.62138 11.6594C3.71897 12.226 4.1148 12.6802 4.69192 12.8721L5.83268 13.2514ZM1.9789 4.72497C2.22072 3.32106 3.33662 2.28906 4.74499 2.07476C6.09444 1.86944 7.94567 1.66699 9.99935 1.66699C12.053 1.66699 13.9043 1.86944 15.2537 2.07476C16.6621 2.28906 17.778 3.32105 18.0198 4.72497C18.1883 5.70342 18.3327 6.94637 18.3327 8.33366C18.3327 9.72095 18.1883 10.9639 18.0198 11.9424C17.778 13.3463 16.6621 14.3783 15.2537 14.5926C14.0192 14.7804 12.3647 14.9658 10.5194 14.996L5.42329 18.0074C4.86778 18.3356 4.16602 17.9352 4.16602 17.29V14.4536C3.03815 14.0786 2.18648 13.1475 1.9789 11.9424C1.81036 10.9639 1.66602 9.72095 1.66602 8.33366C1.66602 6.94637 1.81036 5.70342 1.9789 4.72497Z" fill="currentColor"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83333 5.83301C5.3731 5.83301 5 6.2061 5 6.66634C5 7.12658 5.3731 7.49967 5.83333 7.49967H14.1667C14.6269 7.49967 15 7.12658 15 6.66634C15 6.2061 14.6269 5.83301 14.1667 5.83301H5.83333ZM5.83333 9.16634C5.3731 9.16634 5 9.53944 5 9.99968C5 10.4599 5.3731 10.833 5.83333 10.833H9.16667C9.6269 10.833 10 10.4599 10 9.99968C10 9.53944 9.6269 9.16634 9.16667 9.16634H5.83333Z" fill="currentColor"/>
					</svg>
					<span>Messages</span>
				</a>
				<a href="settings-profile.html" class="nav__item
					{{#if page.settings}}
						nav__item--active
					{{/if}}">
					<svg class="nav__icon" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6239 5.909C16.6326 5.25809 16.3886 4.60444 15.8919 4.10777C15.3952 3.6111 14.7416 3.3671 14.0907 3.37576C14.0904 3.37576 14.0909 3.37576 14.0907 3.37576C13.7309 3.38065 13.3713 3.46274 13.0402 3.622C12.9215 3.67908 12.8064 3.74607 12.6962 3.82297C12.6537 3.85259 12.5991 3.85934 12.5512 3.83951C12.5034 3.8197 12.4695 3.77627 12.4605 3.72534C12.4369 3.59299 12.4029 3.46424 12.3593 3.33998C12.2378 2.99325 12.0421 2.68143 11.7911 2.42358C11.791 2.4234 11.7913 2.42375 11.7911 2.42358C11.337 1.95719 10.7017 1.66699 9.99935 1.66699C9.29696 1.66699 8.66222 1.95666 8.20808 2.42305C8.20791 2.42322 8.20825 2.42287 8.20808 2.42305C7.95714 2.6809 7.76088 2.99325 7.63938 3.33998C7.59584 3.46424 7.56183 3.59299 7.53824 3.72534C7.52916 3.77626 7.49526 3.8197 7.44747 3.83951C7.39965 3.85934 7.34499 3.85259 7.30253 3.82297C7.19227 3.74607 7.07719 3.67908 6.95853 3.622C6.62744 3.46274 6.26853 3.38066 5.90876 3.37577C5.90851 3.37577 5.90901 3.37577 5.90876 3.37577C5.25785 3.36711 4.60346 3.6111 4.10679 4.10777C3.61012 4.60444 3.36612 5.25809 3.37478 5.909C3.37479 5.90925 3.37478 5.90876 3.37478 5.909C3.37968 6.26877 3.46176 6.62841 3.62102 6.9595C3.6781 7.07816 3.74509 7.19324 3.82199 7.3035C3.85161 7.34597 3.85837 7.40062 3.83854 7.44845C3.81872 7.49623 3.77529 7.53014 3.72436 7.53922C3.59201 7.56281 3.46326 7.59682 3.33899 7.64036C2.99227 7.76186 2.68045 7.95761 2.4226 8.20854C2.42242 8.20871 2.42278 8.20837 2.4226 8.20854C1.95621 8.66268 1.66602 9.29793 1.66602 10.0003C1.66602 10.7027 1.95568 11.3375 2.42207 11.7916C2.42225 11.7918 2.4219 11.7914 2.42207 11.7916C2.67992 12.0425 2.99227 12.2388 3.33899 12.3603C3.46326 12.4038 3.592 12.4378 3.72436 12.4614C3.77529 12.4705 3.81872 12.5044 3.83854 12.5522C3.85837 12.6 3.85161 12.6547 3.82199 12.6971C3.74509 12.8074 3.6781 12.9225 3.62102 13.0412C3.46176 13.3722 3.37969 13.7312 3.37479 14.0909C3.37479 14.0912 3.3748 14.0907 3.37479 14.0909C3.36613 14.7418 3.61013 15.3962 4.10679 15.8929C4.60346 16.3896 5.25711 16.6336 5.90803 16.6249C5.90827 16.6249 5.90778 16.6249 5.90803 16.6249C6.26779 16.62 6.62743 16.5379 6.95851 16.3787C7.07717 16.3216 7.19226 16.2546 7.30252 16.1777C7.34499 16.1481 7.39965 16.1413 7.44747 16.1611C7.49526 16.181 7.52916 16.2244 7.53824 16.2753C7.56183 16.4077 7.59584 16.5364 7.63939 16.6607C7.76089 17.0074 7.95664 17.3192 8.20756 17.5771C8.20774 17.5773 8.20739 17.5769 8.20756 17.5771C8.66171 18.0435 9.29696 18.3337 9.99935 18.3337C10.7017 18.3337 11.3365 18.044 11.7906 17.5776C11.7908 17.5774 11.7905 17.5778 11.7906 17.5776C12.0416 17.3198 12.2378 17.0074 12.3593 16.6607C12.4029 16.5364 12.4369 16.4077 12.4605 16.2753C12.4695 16.2244 12.5034 16.181 12.5512 16.1611C12.5991 16.1413 12.6537 16.1481 12.6962 16.1777C12.8064 16.2546 12.9215 16.3216 13.0402 16.3787C13.3713 16.5379 13.7302 16.62 14.0899 16.6249C14.0902 16.6249 14.0897 16.6249 14.0899 16.6249C14.7409 16.6335 15.3952 16.3896 15.8919 15.8929C16.3886 15.3962 16.6326 14.7426 16.6239 14.0916C16.6239 14.0914 16.6239 14.0919 16.6239 14.0916C16.619 13.7319 16.5369 13.3722 16.3777 13.0412C16.3206 12.9225 16.2536 12.8074 16.1767 12.6971C16.1471 12.6547 16.1403 12.6 16.1602 12.5522C16.18 12.5044 16.2234 12.4705 16.2743 12.4614C16.4067 12.4378 16.5354 12.4038 16.6597 12.3603C17.0064 12.2388 17.3183 12.043 17.5761 11.7921C17.5763 11.7919 17.5759 11.7923 17.5761 11.7921C18.0425 11.338 18.3327 10.7027 18.3327 10.0003C18.3327 9.29793 18.043 8.6632 17.5766 8.20905C17.5764 8.20888 17.5768 8.20922 17.5766 8.20905C17.3188 7.95812 17.0064 7.76186 16.6597 7.64036C16.5354 7.59682 16.4067 7.56281 16.2743 7.53922C16.2234 7.53014 16.18 7.49623 16.1602 7.44845C16.1403 7.40062 16.1471 7.34597 16.1767 7.3035C16.2536 7.19323 16.3206 7.07815 16.3777 6.95949C16.5369 6.62841 16.619 6.26876 16.6239 5.909C16.6239 5.90876 16.6239 5.90925 16.6239 5.909ZM14.7134 5.28628C14.4247 4.9976 13.9736 4.96402 13.6496 5.19001C13.158 5.53286 12.5051 5.62468 11.9128 5.37906C11.322 5.13408 10.925 4.60853 10.8197 4.01781C10.7503 3.6289 10.4076 3.33366 9.99935 3.33366C9.59109 3.33366 9.24837 3.6289 9.17904 4.01781C9.07375 4.60852 8.67666 5.13408 8.08588 5.37906C7.49358 5.62467 6.84072 5.53286 6.34912 5.19C6.0251 4.96402 5.57399 4.9976 5.2853 5.28628C4.99662 5.57496 4.96305 6.02607 5.18903 6.35009C5.53188 6.8417 5.6237 7.49456 5.37808 8.08686C5.1331 8.67763 4.60755 9.07472 4.01684 9.18002C3.62793 9.24934 3.33268 9.59207 3.33268 10.0003C3.33268 10.4086 3.62793 10.7513 4.01684 10.8206C4.60755 10.9259 5.13311 11.323 5.37808 11.9138C5.6237 12.5061 5.53188 13.159 5.18903 13.6506C4.96305 13.9746 4.99662 14.4257 5.2853 14.7144C5.57399 15.0031 6.0251 15.0366 6.34912 14.8106C6.84071 14.4678 7.49357 14.376 8.08588 14.6216C8.67665 14.8666 9.07375 15.3921 9.17904 15.9828C9.24837 16.3717 9.59109 16.667 9.99935 16.667C10.4076 16.667 10.7503 16.3717 10.8197 15.9828C10.925 15.3921 11.322 14.8666 11.9128 14.6216C12.5051 14.376 13.158 14.4678 13.6496 14.8106C13.9736 15.0366 14.4247 15.0031 14.7134 14.7144C15.0021 14.4257 15.0356 13.9746 14.8097 13.6506C14.4668 13.159 14.375 12.5061 14.6206 11.9138C14.8656 11.323 15.3911 10.9259 15.9819 10.8206C16.3708 10.7513 16.666 10.4086 16.666 10.0003C16.666 9.59207 16.3708 9.24934 15.9819 9.18002C15.3912 9.07472 14.8656 8.67763 14.6206 8.08686C14.375 7.49455 14.4668 6.84169 14.8097 6.35009C15.0356 6.02607 15.0021 5.57496 14.7134 5.28628Z" fill="currentColor"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 11.667C10.9198 11.667 11.666 10.9208 11.666 10.0003C11.666 9.07985 10.9198 8.33366 9.99935 8.33366C9.07887 8.33366 8.33268 9.07985 8.33268 10.0003C8.33268 10.9208 9.07887 11.667 9.99935 11.667ZM9.99935 13.3337C11.8403 13.3337 13.3327 11.8413 13.3327 10.0003C13.3327 8.15938 11.8403 6.66699 9.99935 6.66699C8.1584 6.66699 6.66602 8.15938 6.66602 10.0003C6.66602 11.8413 8.1584 13.3337 9.99935 13.3337Z" fill="currentColor"/>
					</svg>
					<span>Settings</span>
				</a>
				<a href="login.html" class="nav__item">
					<svg class="nav__icon" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6239 5.909C16.6326 5.25809 16.3886 4.60444 15.8919 4.10777C15.3952 3.6111 14.7416 3.3671 14.0907 3.37576C14.0904 3.37576 14.0909 3.37576 14.0907 3.37576C13.7309 3.38065 13.3713 3.46274 13.0402 3.622C12.9215 3.67908 12.8064 3.74607 12.6962 3.82297C12.6537 3.85259 12.5991 3.85934 12.5512 3.83951C12.5034 3.8197 12.4695 3.77627 12.4605 3.72534C12.4369 3.59299 12.4029 3.46424 12.3593 3.33998C12.2378 2.99325 12.0421 2.68143 11.7911 2.42358C11.791 2.4234 11.7913 2.42375 11.7911 2.42358C11.337 1.95719 10.7017 1.66699 9.99935 1.66699C9.29696 1.66699 8.66222 1.95666 8.20808 2.42305C8.20791 2.42322 8.20825 2.42287 8.20808 2.42305C7.95714 2.6809 7.76088 2.99325 7.63938 3.33998C7.59584 3.46424 7.56183 3.59299 7.53824 3.72534C7.52916 3.77626 7.49526 3.8197 7.44747 3.83951C7.39965 3.85934 7.34499 3.85259 7.30253 3.82297C7.19227 3.74607 7.07719 3.67908 6.95853 3.622C6.62744 3.46274 6.26853 3.38066 5.90876 3.37577C5.90851 3.37577 5.90901 3.37577 5.90876 3.37577C5.25785 3.36711 4.60346 3.6111 4.10679 4.10777C3.61012 4.60444 3.36612 5.25809 3.37478 5.909C3.37479 5.90925 3.37478 5.90876 3.37478 5.909C3.37968 6.26877 3.46176 6.62841 3.62102 6.9595C3.6781 7.07816 3.74509 7.19324 3.82199 7.3035C3.85161 7.34597 3.85837 7.40062 3.83854 7.44845C3.81872 7.49623 3.77529 7.53014 3.72436 7.53922C3.59201 7.56281 3.46326 7.59682 3.33899 7.64036C2.99227 7.76186 2.68045 7.95761 2.4226 8.20854C2.42242 8.20871 2.42278 8.20837 2.4226 8.20854C1.95621 8.66268 1.66602 9.29793 1.66602 10.0003C1.66602 10.7027 1.95568 11.3375 2.42207 11.7916C2.42225 11.7918 2.4219 11.7914 2.42207 11.7916C2.67992 12.0425 2.99227 12.2388 3.33899 12.3603C3.46326 12.4038 3.592 12.4378 3.72436 12.4614C3.77529 12.4705 3.81872 12.5044 3.83854 12.5522C3.85837 12.6 3.85161 12.6547 3.82199 12.6971C3.74509 12.8074 3.6781 12.9225 3.62102 13.0412C3.46176 13.3722 3.37969 13.7312 3.37479 14.0909C3.37479 14.0912 3.3748 14.0907 3.37479 14.0909C3.36613 14.7418 3.61013 15.3962 4.10679 15.8929C4.60346 16.3896 5.25711 16.6336 5.90803 16.6249C5.90827 16.6249 5.90778 16.6249 5.90803 16.6249C6.26779 16.62 6.62743 16.5379 6.95851 16.3787C7.07717 16.3216 7.19226 16.2546 7.30252 16.1777C7.34499 16.1481 7.39965 16.1413 7.44747 16.1611C7.49526 16.181 7.52916 16.2244 7.53824 16.2753C7.56183 16.4077 7.59584 16.5364 7.63939 16.6607C7.76089 17.0074 7.95664 17.3192 8.20756 17.5771C8.20774 17.5773 8.20739 17.5769 8.20756 17.5771C8.66171 18.0435 9.29696 18.3337 9.99935 18.3337C10.7017 18.3337 11.3365 18.044 11.7906 17.5776C11.7908 17.5774 11.7905 17.5778 11.7906 17.5776C12.0416 17.3198 12.2378 17.0074 12.3593 16.6607C12.4029 16.5364 12.4369 16.4077 12.4605 16.2753C12.4695 16.2244 12.5034 16.181 12.5512 16.1611C12.5991 16.1413 12.6537 16.1481 12.6962 16.1777C12.8064 16.2546 12.9215 16.3216 13.0402 16.3787C13.3713 16.5379 13.7302 16.62 14.0899 16.6249C14.0902 16.6249 14.0897 16.6249 14.0899 16.6249C14.7409 16.6335 15.3952 16.3896 15.8919 15.8929C16.3886 15.3962 16.6326 14.7426 16.6239 14.0916C16.6239 14.0914 16.6239 14.0919 16.6239 14.0916C16.619 13.7319 16.5369 13.3722 16.3777 13.0412C16.3206 12.9225 16.2536 12.8074 16.1767 12.6971C16.1471 12.6547 16.1403 12.6 16.1602 12.5522C16.18 12.5044 16.2234 12.4705 16.2743 12.4614C16.4067 12.4378 16.5354 12.4038 16.6597 12.3603C17.0064 12.2388 17.3183 12.043 17.5761 11.7921C17.5763 11.7919 17.5759 11.7923 17.5761 11.7921C18.0425 11.338 18.3327 10.7027 18.3327 10.0003C18.3327 9.29793 18.043 8.6632 17.5766 8.20905C17.5764 8.20888 17.5768 8.20922 17.5766 8.20905C17.3188 7.95812 17.0064 7.76186 16.6597 7.64036C16.5354 7.59682 16.4067 7.56281 16.2743 7.53922C16.2234 7.53014 16.18 7.49623 16.1602 7.44845C16.1403 7.40062 16.1471 7.34597 16.1767 7.3035C16.2536 7.19323 16.3206 7.07815 16.3777 6.95949C16.5369 6.62841 16.619 6.26876 16.6239 5.909C16.6239 5.90876 16.6239 5.90925 16.6239 5.909ZM14.7134 5.28628C14.4247 4.9976 13.9736 4.96402 13.6496 5.19001C13.158 5.53286 12.5051 5.62468 11.9128 5.37906C11.322 5.13408 10.925 4.60853 10.8197 4.01781C10.7503 3.6289 10.4076 3.33366 9.99935 3.33366C9.59109 3.33366 9.24837 3.6289 9.17904 4.01781C9.07375 4.60852 8.67666 5.13408 8.08588 5.37906C7.49358 5.62467 6.84072 5.53286 6.34912 5.19C6.0251 4.96402 5.57399 4.9976 5.2853 5.28628C4.99662 5.57496 4.96305 6.02607 5.18903 6.35009C5.53188 6.8417 5.6237 7.49456 5.37808 8.08686C5.1331 8.67763 4.60755 9.07472 4.01684 9.18002C3.62793 9.24934 3.33268 9.59207 3.33268 10.0003C3.33268 10.4086 3.62793 10.7513 4.01684 10.8206C4.60755 10.9259 5.13311 11.323 5.37808 11.9138C5.6237 12.5061 5.53188 13.159 5.18903 13.6506C4.96305 13.9746 4.99662 14.4257 5.2853 14.7144C5.57399 15.0031 6.0251 15.0366 6.34912 14.8106C6.84071 14.4678 7.49357 14.376 8.08588 14.6216C8.67665 14.8666 9.07375 15.3921 9.17904 15.9828C9.24837 16.3717 9.59109 16.667 9.99935 16.667C10.4076 16.667 10.7503 16.3717 10.8197 15.9828C10.925 15.3921 11.322 14.8666 11.9128 14.6216C12.5051 14.376 13.158 14.4678 13.6496 14.8106C13.9736 15.0366 14.4247 15.0031 14.7134 14.7144C15.0021 14.4257 15.0356 13.9746 14.8097 13.6506C14.4668 13.159 14.375 12.5061 14.6206 11.9138C14.8656 11.323 15.3911 10.9259 15.9819 10.8206C16.3708 10.7513 16.666 10.4086 16.666 10.0003C16.666 9.59207 16.3708 9.24934 15.9819 9.18002C15.3912 9.07472 14.8656 8.67763 14.6206 8.08686C14.375 7.49455 14.4668 6.84169 14.8097 6.35009C15.0356 6.02607 15.0021 5.57496 14.7134 5.28628Z" fill="currentColor"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 11.667C10.9198 11.667 11.666 10.9208 11.666 10.0003C11.666 9.07985 10.9198 8.33366 9.99935 8.33366C9.07887 8.33366 8.33268 9.07985 8.33268 10.0003C8.33268 10.9208 9.07887 11.667 9.99935 11.667ZM9.99935 13.3337C11.8403 13.3337 13.3327 11.8413 13.3327 10.0003C13.3327 8.15938 11.8403 6.66699 9.99935 6.66699C8.1584 6.66699 6.66602 8.15938 6.66602 10.0003C6.66602 11.8413 8.1584 13.3337 9.99935 13.3337Z" fill="currentColor"/>
					</svg>
					<span>Sign in</span>
				</a>
				<a href="register.html" class="nav__item">
					<svg class="nav__icon" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6239 5.909C16.6326 5.25809 16.3886 4.60444 15.8919 4.10777C15.3952 3.6111 14.7416 3.3671 14.0907 3.37576C14.0904 3.37576 14.0909 3.37576 14.0907 3.37576C13.7309 3.38065 13.3713 3.46274 13.0402 3.622C12.9215 3.67908 12.8064 3.74607 12.6962 3.82297C12.6537 3.85259 12.5991 3.85934 12.5512 3.83951C12.5034 3.8197 12.4695 3.77627 12.4605 3.72534C12.4369 3.59299 12.4029 3.46424 12.3593 3.33998C12.2378 2.99325 12.0421 2.68143 11.7911 2.42358C11.791 2.4234 11.7913 2.42375 11.7911 2.42358C11.337 1.95719 10.7017 1.66699 9.99935 1.66699C9.29696 1.66699 8.66222 1.95666 8.20808 2.42305C8.20791 2.42322 8.20825 2.42287 8.20808 2.42305C7.95714 2.6809 7.76088 2.99325 7.63938 3.33998C7.59584 3.46424 7.56183 3.59299 7.53824 3.72534C7.52916 3.77626 7.49526 3.8197 7.44747 3.83951C7.39965 3.85934 7.34499 3.85259 7.30253 3.82297C7.19227 3.74607 7.07719 3.67908 6.95853 3.622C6.62744 3.46274 6.26853 3.38066 5.90876 3.37577C5.90851 3.37577 5.90901 3.37577 5.90876 3.37577C5.25785 3.36711 4.60346 3.6111 4.10679 4.10777C3.61012 4.60444 3.36612 5.25809 3.37478 5.909C3.37479 5.90925 3.37478 5.90876 3.37478 5.909C3.37968 6.26877 3.46176 6.62841 3.62102 6.9595C3.6781 7.07816 3.74509 7.19324 3.82199 7.3035C3.85161 7.34597 3.85837 7.40062 3.83854 7.44845C3.81872 7.49623 3.77529 7.53014 3.72436 7.53922C3.59201 7.56281 3.46326 7.59682 3.33899 7.64036C2.99227 7.76186 2.68045 7.95761 2.4226 8.20854C2.42242 8.20871 2.42278 8.20837 2.4226 8.20854C1.95621 8.66268 1.66602 9.29793 1.66602 10.0003C1.66602 10.7027 1.95568 11.3375 2.42207 11.7916C2.42225 11.7918 2.4219 11.7914 2.42207 11.7916C2.67992 12.0425 2.99227 12.2388 3.33899 12.3603C3.46326 12.4038 3.592 12.4378 3.72436 12.4614C3.77529 12.4705 3.81872 12.5044 3.83854 12.5522C3.85837 12.6 3.85161 12.6547 3.82199 12.6971C3.74509 12.8074 3.6781 12.9225 3.62102 13.0412C3.46176 13.3722 3.37969 13.7312 3.37479 14.0909C3.37479 14.0912 3.3748 14.0907 3.37479 14.0909C3.36613 14.7418 3.61013 15.3962 4.10679 15.8929C4.60346 16.3896 5.25711 16.6336 5.90803 16.6249C5.90827 16.6249 5.90778 16.6249 5.90803 16.6249C6.26779 16.62 6.62743 16.5379 6.95851 16.3787C7.07717 16.3216 7.19226 16.2546 7.30252 16.1777C7.34499 16.1481 7.39965 16.1413 7.44747 16.1611C7.49526 16.181 7.52916 16.2244 7.53824 16.2753C7.56183 16.4077 7.59584 16.5364 7.63939 16.6607C7.76089 17.0074 7.95664 17.3192 8.20756 17.5771C8.20774 17.5773 8.20739 17.5769 8.20756 17.5771C8.66171 18.0435 9.29696 18.3337 9.99935 18.3337C10.7017 18.3337 11.3365 18.044 11.7906 17.5776C11.7908 17.5774 11.7905 17.5778 11.7906 17.5776C12.0416 17.3198 12.2378 17.0074 12.3593 16.6607C12.4029 16.5364 12.4369 16.4077 12.4605 16.2753C12.4695 16.2244 12.5034 16.181 12.5512 16.1611C12.5991 16.1413 12.6537 16.1481 12.6962 16.1777C12.8064 16.2546 12.9215 16.3216 13.0402 16.3787C13.3713 16.5379 13.7302 16.62 14.0899 16.6249C14.0902 16.6249 14.0897 16.6249 14.0899 16.6249C14.7409 16.6335 15.3952 16.3896 15.8919 15.8929C16.3886 15.3962 16.6326 14.7426 16.6239 14.0916C16.6239 14.0914 16.6239 14.0919 16.6239 14.0916C16.619 13.7319 16.5369 13.3722 16.3777 13.0412C16.3206 12.9225 16.2536 12.8074 16.1767 12.6971C16.1471 12.6547 16.1403 12.6 16.1602 12.5522C16.18 12.5044 16.2234 12.4705 16.2743 12.4614C16.4067 12.4378 16.5354 12.4038 16.6597 12.3603C17.0064 12.2388 17.3183 12.043 17.5761 11.7921C17.5763 11.7919 17.5759 11.7923 17.5761 11.7921C18.0425 11.338 18.3327 10.7027 18.3327 10.0003C18.3327 9.29793 18.043 8.6632 17.5766 8.20905C17.5764 8.20888 17.5768 8.20922 17.5766 8.20905C17.3188 7.95812 17.0064 7.76186 16.6597 7.64036C16.5354 7.59682 16.4067 7.56281 16.2743 7.53922C16.2234 7.53014 16.18 7.49623 16.1602 7.44845C16.1403 7.40062 16.1471 7.34597 16.1767 7.3035C16.2536 7.19323 16.3206 7.07815 16.3777 6.95949C16.5369 6.62841 16.619 6.26876 16.6239 5.909C16.6239 5.90876 16.6239 5.90925 16.6239 5.909ZM14.7134 5.28628C14.4247 4.9976 13.9736 4.96402 13.6496 5.19001C13.158 5.53286 12.5051 5.62468 11.9128 5.37906C11.322 5.13408 10.925 4.60853 10.8197 4.01781C10.7503 3.6289 10.4076 3.33366 9.99935 3.33366C9.59109 3.33366 9.24837 3.6289 9.17904 4.01781C9.07375 4.60852 8.67666 5.13408 8.08588 5.37906C7.49358 5.62467 6.84072 5.53286 6.34912 5.19C6.0251 4.96402 5.57399 4.9976 5.2853 5.28628C4.99662 5.57496 4.96305 6.02607 5.18903 6.35009C5.53188 6.8417 5.6237 7.49456 5.37808 8.08686C5.1331 8.67763 4.60755 9.07472 4.01684 9.18002C3.62793 9.24934 3.33268 9.59207 3.33268 10.0003C3.33268 10.4086 3.62793 10.7513 4.01684 10.8206C4.60755 10.9259 5.13311 11.323 5.37808 11.9138C5.6237 12.5061 5.53188 13.159 5.18903 13.6506C4.96305 13.9746 4.99662 14.4257 5.2853 14.7144C5.57399 15.0031 6.0251 15.0366 6.34912 14.8106C6.84071 14.4678 7.49357 14.376 8.08588 14.6216C8.67665 14.8666 9.07375 15.3921 9.17904 15.9828C9.24837 16.3717 9.59109 16.667 9.99935 16.667C10.4076 16.667 10.7503 16.3717 10.8197 15.9828C10.925 15.3921 11.322 14.8666 11.9128 14.6216C12.5051 14.376 13.158 14.4678 13.6496 14.8106C13.9736 15.0366 14.4247 15.0031 14.7134 14.7144C15.0021 14.4257 15.0356 13.9746 14.8097 13.6506C14.4668 13.159 14.375 12.5061 14.6206 11.9138C14.8656 11.323 15.3911 10.9259 15.9819 10.8206C16.3708 10.7513 16.666 10.4086 16.666 10.0003C16.666 9.59207 16.3708 9.24934 15.9819 9.18002C15.3912 9.07472 14.8656 8.67763 14.6206 8.08686C14.375 7.49455 14.4668 6.84169 14.8097 6.35009C15.0356 6.02607 15.0021 5.57496 14.7134 5.28628Z" fill="currentColor"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 11.667C10.9198 11.667 11.666 10.9208 11.666 10.0003C11.666 9.07985 10.9198 8.33366 9.99935 8.33366C9.07887 8.33366 8.33268 9.07985 8.33268 10.0003C8.33268 10.9208 9.07887 11.667 9.99935 11.667ZM9.99935 13.3337C11.8403 13.3337 13.3327 11.8413 13.3327 10.0003C13.3327 8.15938 11.8403 6.66699 9.99935 6.66699C8.1584 6.66699 6.66602 8.15938 6.66602 10.0003C6.66602 11.8413 8.1584 13.3337 9.99935 13.3337Z" fill="currentColor"/>
					</svg>
					<span>Sign up</span>
				</a>
				<a href="error.html" class="nav__item">
					<svg class="nav__icon" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6239 5.909C16.6326 5.25809 16.3886 4.60444 15.8919 4.10777C15.3952 3.6111 14.7416 3.3671 14.0907 3.37576C14.0904 3.37576 14.0909 3.37576 14.0907 3.37576C13.7309 3.38065 13.3713 3.46274 13.0402 3.622C12.9215 3.67908 12.8064 3.74607 12.6962 3.82297C12.6537 3.85259 12.5991 3.85934 12.5512 3.83951C12.5034 3.8197 12.4695 3.77627 12.4605 3.72534C12.4369 3.59299 12.4029 3.46424 12.3593 3.33998C12.2378 2.99325 12.0421 2.68143 11.7911 2.42358C11.791 2.4234 11.7913 2.42375 11.7911 2.42358C11.337 1.95719 10.7017 1.66699 9.99935 1.66699C9.29696 1.66699 8.66222 1.95666 8.20808 2.42305C8.20791 2.42322 8.20825 2.42287 8.20808 2.42305C7.95714 2.6809 7.76088 2.99325 7.63938 3.33998C7.59584 3.46424 7.56183 3.59299 7.53824 3.72534C7.52916 3.77626 7.49526 3.8197 7.44747 3.83951C7.39965 3.85934 7.34499 3.85259 7.30253 3.82297C7.19227 3.74607 7.07719 3.67908 6.95853 3.622C6.62744 3.46274 6.26853 3.38066 5.90876 3.37577C5.90851 3.37577 5.90901 3.37577 5.90876 3.37577C5.25785 3.36711 4.60346 3.6111 4.10679 4.10777C3.61012 4.60444 3.36612 5.25809 3.37478 5.909C3.37479 5.90925 3.37478 5.90876 3.37478 5.909C3.37968 6.26877 3.46176 6.62841 3.62102 6.9595C3.6781 7.07816 3.74509 7.19324 3.82199 7.3035C3.85161 7.34597 3.85837 7.40062 3.83854 7.44845C3.81872 7.49623 3.77529 7.53014 3.72436 7.53922C3.59201 7.56281 3.46326 7.59682 3.33899 7.64036C2.99227 7.76186 2.68045 7.95761 2.4226 8.20854C2.42242 8.20871 2.42278 8.20837 2.4226 8.20854C1.95621 8.66268 1.66602 9.29793 1.66602 10.0003C1.66602 10.7027 1.95568 11.3375 2.42207 11.7916C2.42225 11.7918 2.4219 11.7914 2.42207 11.7916C2.67992 12.0425 2.99227 12.2388 3.33899 12.3603C3.46326 12.4038 3.592 12.4378 3.72436 12.4614C3.77529 12.4705 3.81872 12.5044 3.83854 12.5522C3.85837 12.6 3.85161 12.6547 3.82199 12.6971C3.74509 12.8074 3.6781 12.9225 3.62102 13.0412C3.46176 13.3722 3.37969 13.7312 3.37479 14.0909C3.37479 14.0912 3.3748 14.0907 3.37479 14.0909C3.36613 14.7418 3.61013 15.3962 4.10679 15.8929C4.60346 16.3896 5.25711 16.6336 5.90803 16.6249C5.90827 16.6249 5.90778 16.6249 5.90803 16.6249C6.26779 16.62 6.62743 16.5379 6.95851 16.3787C7.07717 16.3216 7.19226 16.2546 7.30252 16.1777C7.34499 16.1481 7.39965 16.1413 7.44747 16.1611C7.49526 16.181 7.52916 16.2244 7.53824 16.2753C7.56183 16.4077 7.59584 16.5364 7.63939 16.6607C7.76089 17.0074 7.95664 17.3192 8.20756 17.5771C8.20774 17.5773 8.20739 17.5769 8.20756 17.5771C8.66171 18.0435 9.29696 18.3337 9.99935 18.3337C10.7017 18.3337 11.3365 18.044 11.7906 17.5776C11.7908 17.5774 11.7905 17.5778 11.7906 17.5776C12.0416 17.3198 12.2378 17.0074 12.3593 16.6607C12.4029 16.5364 12.4369 16.4077 12.4605 16.2753C12.4695 16.2244 12.5034 16.181 12.5512 16.1611C12.5991 16.1413 12.6537 16.1481 12.6962 16.1777C12.8064 16.2546 12.9215 16.3216 13.0402 16.3787C13.3713 16.5379 13.7302 16.62 14.0899 16.6249C14.0902 16.6249 14.0897 16.6249 14.0899 16.6249C14.7409 16.6335 15.3952 16.3896 15.8919 15.8929C16.3886 15.3962 16.6326 14.7426 16.6239 14.0916C16.6239 14.0914 16.6239 14.0919 16.6239 14.0916C16.619 13.7319 16.5369 13.3722 16.3777 13.0412C16.3206 12.9225 16.2536 12.8074 16.1767 12.6971C16.1471 12.6547 16.1403 12.6 16.1602 12.5522C16.18 12.5044 16.2234 12.4705 16.2743 12.4614C16.4067 12.4378 16.5354 12.4038 16.6597 12.3603C17.0064 12.2388 17.3183 12.043 17.5761 11.7921C17.5763 11.7919 17.5759 11.7923 17.5761 11.7921C18.0425 11.338 18.3327 10.7027 18.3327 10.0003C18.3327 9.29793 18.043 8.6632 17.5766 8.20905C17.5764 8.20888 17.5768 8.20922 17.5766 8.20905C17.3188 7.95812 17.0064 7.76186 16.6597 7.64036C16.5354 7.59682 16.4067 7.56281 16.2743 7.53922C16.2234 7.53014 16.18 7.49623 16.1602 7.44845C16.1403 7.40062 16.1471 7.34597 16.1767 7.3035C16.2536 7.19323 16.3206 7.07815 16.3777 6.95949C16.5369 6.62841 16.619 6.26876 16.6239 5.909C16.6239 5.90876 16.6239 5.90925 16.6239 5.909ZM14.7134 5.28628C14.4247 4.9976 13.9736 4.96402 13.6496 5.19001C13.158 5.53286 12.5051 5.62468 11.9128 5.37906C11.322 5.13408 10.925 4.60853 10.8197 4.01781C10.7503 3.6289 10.4076 3.33366 9.99935 3.33366C9.59109 3.33366 9.24837 3.6289 9.17904 4.01781C9.07375 4.60852 8.67666 5.13408 8.08588 5.37906C7.49358 5.62467 6.84072 5.53286 6.34912 5.19C6.0251 4.96402 5.57399 4.9976 5.2853 5.28628C4.99662 5.57496 4.96305 6.02607 5.18903 6.35009C5.53188 6.8417 5.6237 7.49456 5.37808 8.08686C5.1331 8.67763 4.60755 9.07472 4.01684 9.18002C3.62793 9.24934 3.33268 9.59207 3.33268 10.0003C3.33268 10.4086 3.62793 10.7513 4.01684 10.8206C4.60755 10.9259 5.13311 11.323 5.37808 11.9138C5.6237 12.5061 5.53188 13.159 5.18903 13.6506C4.96305 13.9746 4.99662 14.4257 5.2853 14.7144C5.57399 15.0031 6.0251 15.0366 6.34912 14.8106C6.84071 14.4678 7.49357 14.376 8.08588 14.6216C8.67665 14.8666 9.07375 15.3921 9.17904 15.9828C9.24837 16.3717 9.59109 16.667 9.99935 16.667C10.4076 16.667 10.7503 16.3717 10.8197 15.9828C10.925 15.3921 11.322 14.8666 11.9128 14.6216C12.5051 14.376 13.158 14.4678 13.6496 14.8106C13.9736 15.0366 14.4247 15.0031 14.7134 14.7144C15.0021 14.4257 15.0356 13.9746 14.8097 13.6506C14.4668 13.159 14.375 12.5061 14.6206 11.9138C14.8656 11.323 15.3911 10.9259 15.9819 10.8206C16.3708 10.7513 16.666 10.4086 16.666 10.0003C16.666 9.59207 16.3708 9.24934 15.9819 9.18002C15.3912 9.07472 14.8656 8.67763 14.6206 8.08686C14.375 7.49455 14.4668 6.84169 14.8097 6.35009C15.0356 6.02607 15.0021 5.57496 14.7134 5.28628Z" fill="currentColor"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 11.667C10.9198 11.667 11.666 10.9208 11.666 10.0003C11.666 9.07985 10.9198 8.33366 9.99935 8.33366C9.07887 8.33366 8.33268 9.07985 8.33268 10.0003C8.33268 10.9208 9.07887 11.667 9.99935 11.667ZM9.99935 13.3337C11.8403 13.3337 13.3327 11.8413 13.3327 10.0003C13.3327 8.15938 11.8403 6.66699 9.99935 6.66699C8.1584 6.66699 6.66602 8.15938 6.66602 10.0003C6.66602 11.8413 8.1584 13.3337 9.99935 13.3337Z" fill="currentColor"/>
					</svg>
					<span>Error</span>
				</a>
				<button class="nav__item nav__item--bottom">
					<svg class="nav__icon" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M9.19058 12.5003C9.65049 12.4829 10.0374 12.8417 10.0548 13.3016C10.0939 14.3384 10.1489 15.0951 10.2029 15.6377C10.2562 16.172 10.5787 16.4935 11.0284 16.5485C11.5586 16.6133 12.3065 16.6663 13.3329 16.6663C14.3593 16.6663 15.1073 16.6133 15.6375 16.5485C16.0869 16.4935 16.4096 16.1719 16.4629 15.6374C16.5632 14.6303 16.6662 12.8904 16.6662 9.99967C16.6662 7.10899 16.5632 5.36902 16.4629 4.3619C16.4096 3.82745 16.0869 3.50581 15.6375 3.45087C15.1073 3.38605 14.3593 3.33301 13.3329 3.33301C12.3065 3.33301 11.5586 3.38605 11.0284 3.45086C10.5787 3.50583 10.2562 3.82732 10.2029 4.36165C10.1489 4.90422 10.0939 5.66095 10.0548 6.69778C10.0374 7.15769 9.65049 7.51644 9.19058 7.49908C8.73067 7.48172 8.37191 7.09481 8.38928 6.6349C8.42945 5.57071 8.48641 4.7792 8.54447 4.19643C8.66651 2.9713 9.52068 1.95609 10.8261 1.79651C11.4338 1.72223 12.2503 1.66634 13.3329 1.66634C14.4156 1.66634 15.232 1.72223 15.8397 1.79652C17.1453 1.95612 17.9993 2.9718 18.1213 4.1967C18.2288 5.27524 18.3329 7.0734 18.3329 9.99967C18.3329 12.9259 18.2288 14.7241 18.1213 15.8027C17.9993 17.0275 17.1453 18.0432 15.8397 18.2028C15.232 18.2771 14.4156 18.333 13.3329 18.333C12.2503 18.333 11.4338 18.2771 10.8261 18.2028C9.52069 18.0433 8.66651 17.0281 8.54447 15.8029C8.48641 15.2201 8.42945 14.4286 8.38928 13.3644C8.37191 12.9045 8.73067 12.5176 9.19058 12.5003Z" fill="currentColor"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6.00527 12.3274C6.33071 12.6528 6.33071 13.1805 6.00527 13.5059C5.67983 13.8314 5.1522 13.8314 4.82676 13.5059L1.91009 10.5893C1.58466 10.2638 1.58466 9.73618 1.91009 9.41074L4.82676 6.49408C5.1522 6.16864 5.67983 6.16864 6.00527 6.49408C6.33071 6.81951 6.33071 7.34715 6.00527 7.67259L4.51119 9.16667H12.4993C12.9596 9.16667 13.3327 9.53976 13.3327 10C13.3327 10.4602 12.9596 10.8333 12.4993 10.8333L4.51119 10.8333L6.00527 12.3274Z" fill="currentColor"/>
					</svg>
					<span>Log out</span>
				</button>
			</nav>
		</aside>`;
