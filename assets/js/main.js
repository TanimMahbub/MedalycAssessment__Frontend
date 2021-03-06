const $ = (selector)=>document.querySelector(selector);
const $$ = (selectors)=>document.querySelectorAll(selectors);

// custom js
(function() {
  $('.header-middle').style.marginTop = $('.top-bar').clientHeight + 'px';
  $('.searchBtn').addEventListener('click', function(e) {
    e.preventDefault();
    $('.search-form').classList.add('openForm');
  });
  $('.close-form').addEventListener('click', function() {
    $('.search-form').classList.remove('openForm');
  });
  
  $('#all-filters').addEventListener('show.bs.collapse', function (e) {
    e.target.parentElement.classList.add('filter-open')
  });
  $('#all-filters').addEventListener('hide.bs.collapse', function (e) {
    e.target.parentElement.classList.remove('filter-open')
  });

  for (let i = 0, len = $$('.the-doc-card').length; i < len; i++){
      $$('.the-doc-card')[i].setAttribute('tabindex', '0');
  }

  $$('.schedule-time').forEach(function(e) {
    e.addEventListener('click', function(f) {
      this.classList.toggle('scheduled');
    })
  });

  $$('.the-doc-card').forEach(function(e) {
    let scheduleBtn = e.querySelector('.schedule-btn');
    let closeSchedule = e.querySelector('.close-schedule a');
    let scheduleWindow = e.querySelector('.schedule-window');
    scheduleBtn.addEventListener('click', function(f) {
      f.preventDefault();
      scheduleWindow.classList.add('open-schedule');
    });
    closeSchedule.addEventListener('click', function(f) {
      f.preventDefault();
      scheduleWindow.classList.remove('open-schedule');
    });
  });
}());

//infoSlide
const swiper = new Swiper('.infoSlide', {
	loop: false,
	slidesPerView: 2,
  centeredSlides: false,
	spaceBetween: 40,
  navigation: {
    nextEl: ".topinfo-next",
    prevEl: ".topinfo-prev",
  },
	 breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: false
    }
  }

 });

 //schedule-slider
const scheduleSlider = new Swiper('.schedule-slider', {
	loop: false,
	slidesPerView: 1,
  navigation: {
    nextEl: '.schedule-nav.schedule-next',
    prevEl: '.schedule-nav.schedule-prev',
  },
});

// preloader
window.addEventListener("load", function() {
  $('.preloader-area').style.clipPath = 'circle(0)';
});