const toggleMenu = () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  })
}

toggleMenu();

// const fixedHeader = () => {
//   const header = document.querySelector(".header");
//   const startPoint = 1;
//   if (window.scrollY >= startPoint) {
//     header.classList.add("fixed");
//   } else {
//     header.classList.remove("fixed");
//   }
// }

// window.addEventListener("scroll", fixedHeader);


// hero slider
const heroSlider = new Swiper(".heroSwiper", {
  effect: "cards",
  grabCursor: true,
});

// cards sliders

const cardSliderTop = new Swiper(".cards-slider_top", {
  grabCursor: false,
  loop: true,
  spaceBetween: 12,
  slidesPerView: 3,
  freeMode: true,
  allowTouchMove: false,
  noSwiping: true,
  speed: 20000,
  freeModeMomentum: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  breakpoints: {

    // when window width is >= 992px
    992: {
      slidesPerView: 4.33,
      spaceBetween: 30
    },
  }
});


const cardSliderBottom = new Swiper(".cards-slider_bottom", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 3,
  freeMode: true,
  grabCursor: false,
  allowTouchMove: false,
  noSwiping: true,
  speed: 20000,
  freeModeMomentum: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirection: true,
  },
  breakpoints: {

    // when window width is >= 992px
    992: {
      slidesPerView: 4.33,
      spaceBetween: 30
    },
  }
});

const beforeSlider = new Swiper('.before-slider', {
  slidesPerView: 1.1,
  loop: true,
  centeredSlides: true,
  effect: 'coverflow',
  speed: 1000,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 180,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    prevEl: ".before-slider_prev",
    nextEl: ".before-slider_next"
  },
  breakpoints: {
    575: {
      slidesPerView: 1.3,
    },
  }
});

const afterSlider = new Swiper('.after-slider', {
  slidesPerView: 1.1,
  loop: true,
  centeredSlides: true,
  effect: 'coverflow',
  speed: 1000,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 180,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    prevEl: ".after-slider_prev",
    nextEl: ".after-slider_next"
  },
  breakpoints: {
    575: {
      slidesPerView: 1.3,
    },
  }
});


const roadSlider = new Swiper('.roadmap-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: false,
  navigation: {
    prevEl: ".road-slider_prev",
    nextEl: ".road-slider_next"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 2.7,
      spaceBetween: 80
    }
  }
});


const mintSliderLeft = new Swiper('.mint-slider_left', {
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  grabCursor: false,
  allowTouchMove: false,
  noSwiping: true,
  speed: 20000,
  freeModeMomentum: false,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
});

const mintSliderRight = new Swiper('.mint-slider_right', {
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  grabCursor: false,
  allowTouchMove: false,
  noSwiping: true,
  speed: 20000,
  freeModeMomentum: false,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    reverseDirection: true,
  },
});

// Params
let mainSliderSelector = '.team-slider',
  navSliderSelector = '.team-slider_sm';

const teamSides = document.querySelectorAll(".team-slider__item").length;
const teamSmSides = document.querySelectorAll(".team-slider__item").length;
// Main Slider
let mainSliderOptions = {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 10,
  loopAdditionalSlides: teamSides,
  navigation: {
    nextEl: '.team-slider_next',
    prevEl: '.team-slider_prev',
  },
};

let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 15,
  touchRatio: 0.2,
  loopAdditionalSlides: teamSmSides,
  slideToClickedSlide: true,
  breakpoints: {

    575: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    },
  }
};

let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;

// accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}