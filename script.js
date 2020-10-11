
var mainSwiper = new Swiper('.swiper-container', {
	mousewheel: {
		invert: false,
	},
	speed: 5000,
	freeMode: true,
});

let open_menu = document.querySelector(".header__menu");
//функция окрытия меню
open_menu.addEventListener("click", function () {
	document.querySelector(".menu").classList.toggle("active");	//открытие меню
	document.querySelector(".header__logo").classList.toggle("hidd");	//скрытие логотипа
	document.querySelector(".header__menu").classList.toggle("active");	//смена иконки меню
	mainSwiper.mousewheel.disable();
});


setInterval(() => {
	//блокировка скролла при открытом меню
	if (!document.querySelector(".menu").classList.contains("active")) mainSwiper.mousewheel.enable();
	//смена логотипа
	if (mainSwiper.activeIndex >= 1) document.getElementById("logo").setAttribute("src", "img/icons/logo_green.png");
	else document.getElementById("logo").setAttribute("src", "img/icons/logo_white.png");
}, 500);

