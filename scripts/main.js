
window.onload = function() {
	var menu 	  = document.querySelector(".nav"),
	mobileBar 	  = document.querySelector('.header__icon'),
	story         = document.querySelector('.story'),
	pricingItem   = document.querySelectorAll('.pricing__item'),
	blockComments = document.querySelector('.comments'),
	blockGallery  = document.querySelector('.gallery'),
	pageMain      = document.querySelector('.page__main');
	// Адаптивное меню
	mobileBar.addEventListener('click', function() {
		menu.classList.toggle('nav_opened');
	});
	// Для появления блоков при скролле(анимация)
	window.onscroll = function() {
		let coordsY = window.pageYOffset;
		// Параллакс для фона главного(первого) блока
		pageMain.style.backgroundPosition = 'center -' + coordsY/15 + '%';
		//Появление блока - история
		if(coordsY >= 500) story.style.left = '0%'; 
		// Плавное появление блоков с ценами и тарифами
		if(coordsY >= 900) {
			for(let i = 0; i < pricingItem.length; i++) {
				pricingItem[i].style.opacity = 1;
			}
		}
		// Блоки комментариев и галаери - анимация выхода
		if(coordsY >= 1400) {
			blockComments.style.left = '0%';
			blockGallery.style.right = '0%';
		}
	}

}
