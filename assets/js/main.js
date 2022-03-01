const $ = (selector)=>document.querySelector(selector);
const $$ = (selectors)=>document.querySelectorAll(selectors);

//openDropDown
const swiper = new Swiper('.infoSlide', {
	loop: false,
	slidesPerView: 4,
   spaceBetween: 10,
	/**
	 breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
	 */
 });