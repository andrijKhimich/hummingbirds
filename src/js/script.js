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
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40
    },
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


if (document.querySelector(".symbolism-page")) {
  // constructor tabs
  function openTab(e, tabName) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab__link");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    e.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  const background = [
    {
      title: "Background",
      url: "./img/constructor/background/clouds.png",
      name: "Clouds",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Background",
      url: "./img/constructor/background/desertCamel.png",
      name: "Desert Camel",
      description: "= Some description",
    },
    {
      title: "Background",
      url: "./img/constructor/background/desertSnake.png",
      name: "Desert Snake",
      description: "= Some description 2",
    },
    {
      title: "Background",
      url: "./img/constructor/background/forestBabyTree.png",
      name: "Forest Baby Tree",
      description: "= Some description 3",
    },
    {
      title: "Background",
      url: "./img/constructor/background/forestBabyTree.png",
      name: "Forest Baby Tree",
      description: "= Some description 4",
    },
  ];


  const body = [
    {
      title: "Bodybase",
      url: "./img/constructor/bodybase/blackBody.png",
      name: "Black body",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Bodybase",
      url: "./img/constructor/bodybase/blueBody.png",
      name: "Blue body",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Bodybase",
      url: "./img/constructor/bodybase/pinkBody.png",
      name: "Pink body",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Bodybase",
      url: "./img/constructor/bodybase/greenBody.png",
      name: "Green body",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Bodybase",
      url: "./img/constructor/bodybase/orangeBody.png",
      name: "Orange body",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
  ];


  const feet = [
    {
      title: "Feet",
      url: "./img/constructor/feet/baseballBat.png",
      name: "Baseball bat",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Feet",
      url: "./img/constructor/feet/blackBomb.png",
      name: "Black bomb",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Feet",
      url: "./img/constructor/feet/blueBoomerang.png",
      name: "Blue boomerang",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Feet",
      url: "./img/constructor/feet/chunkyFlowerRing.png",
      name: "Flower ring",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Feet",
      url: "./img/constructor/feet/donut.png",
      name: "Donut",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
  ];

  const eyes = [
    {
      title: "Eyes",
      url: "./img/constructor/eyes/aggressive.png",
      name: "Aggressive",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Eyes",
      url: "./img/constructor/eyes/aggressiveGirl .png",
      name: "Aggressive girl",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Eyes",
      url: "./img/constructor/eyes/aggressiveMale.png",
      name: "Aggressive male",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Eyes",
      url: "./img/constructor/eyes/blueBrownEyes.png",
      name: "Blue brown",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Eyes",
      url: "./img/constructor/eyes/blue1.png",
      name: "Blue",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
  ];

  const crowns = [
    {
      title: "Crowns",
      url: "./img/constructor/crowns/blackMohawk.png",
      name: "Black mohawk",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Crowns",
      url: "./img/constructor/crowns/blackPunk.png",
      name: "Black punk",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Crowns",
      url: "./img/constructor/crowns/blueBlackStrings.png",
      name: "Black string",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Crowns",
      url: "./img/constructor/crowns/bluePilotHat.png",
      name: "Blue polit hat",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Crowns",
      url: "./img/constructor/crowns/bluePunk.png",
      name: "Blue punk",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
  ];

  const beaks = [
    {
      title: "Beaks",
      url: "./img/constructor/beaks/babyTreeBucket.png",
      name: "Baby tree bucket",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Beaks",
      url: "./img/constructor/beaks/betheChangeWhiteSign.png",
      name: "Bethe change white sign",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Beaks",
      url: "./img/constructor/beaks/blueBalloon.png",
      name: "Blue balloon",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Beaks",
      url: "./img/constructor/beaks/blueButterfly.png",
      name: "Blue butterfly",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Beaks",
      url: "./img/constructor/beaks/blueDrum.png",
      name: "Blue drum",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
  ];


  const tanks = [
    {
      title: "Tanks",
      url: "./img/constructor/tanks/americanFlag.png",
      name: "American Flag",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tanks",
      url: "./img/constructor/tanks/armyGreenTank.png",
      name: "Army green tank",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tanks",
      url: "./img/constructor/tanks/blueTank.png",
      name: "Blue tank",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tanks",
      url: "./img/constructor/tanks/greenTank.png",
      name: "Green tank",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tanks",
      url: "./img/constructor/tanks/maroonTank.png",
      name: "Maroon tank",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
  ];

  const necklaces = [
    {
      title: "Necklaces",
      url: "./img/constructor/necklaces/boneTooth.png",
      name: "Bone tooth",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Necklaces",
      url: "./img/constructor/necklaces/earth.png",
      name: "Earth",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Necklaces",
      url: "./img/constructor/necklaces/emptyTank.png",
      name: "Empty tank",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Necklaces",
      url: "./img/constructor/necklaces/marijuanaLeaf.png",
      name: "Marijuana leaf",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Necklaces",
      url: "./img/constructor/necklaces/musicalNotes.png",
      name: "Musical notes",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
  ];

  const wings = [
    {
      title: "Wings",
      url: "./img/constructor/wings/blackBlueWings.png",
      name: "Black blue wings",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Wings",
      url: "./img/constructor/wings/blackRainbowWings.png",
      name: "Black rainbow wings",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Wings",
      url: "./img/constructor/wings/blueBlackWings.png",
      name: "Blue black wings",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Wings",
      url: "./img/constructor/wings/blueGreenWings.png",
      name: "Blue green wings",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Wings",
      url: "./img/constructor/wings/blueOrangeWings.png",
      name: "Blue orange wings",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
  ];


  const facepaint = [
    {
      title: "Facepaint",
      url: "./img/constructor/facepaint/1Line3DotsPink.png",
      name: "Facepaint",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Facepaint",
      url: "./img/constructor/facepaint/1Line3DotsWhite.png",
      name: "Facepaint",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Facepaint",
      url: "./img/constructor/facepaint/2LinesMaroonWhite.png",
      name: "Facepaint",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Facepaint",
      url: "./img/constructor/facepaint/2LinesMintPink.png",
      name: "Facepaint",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Facepaint",
      url: "./img/constructor/facepaint/2LinesWhiteMint.png",
      name: "Facepaint",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
  ];

  const tails = [
    {
      title: "Tails",
      url: "./img/constructor/tails/tail1.png",
      name: "Tail",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tails",
      url: "./img/constructor/tails/tail2.png",
      name: "Tail",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tails",
      url: "./img/constructor/tails/tail3.png",
      name: "Tail",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tails",
      url: "./img/constructor/tails/tail4.png",
      name: "Tail",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tails",
      url: "./img/constructor/tails/tail5.png",
      name: "Tail",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
  ];

  const tattoo = [
    {
      title: "Tattoo",
      url: "./img/constructor/tattoo/tattoo1.png",
      name: "Tattoo",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tattoo",
      url: "./img/constructor/tattoo/tattoo1.png",
      name: "Tattoo",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tattoo",
      url: "./img/constructor/tattoo/tattoo1.png",
      name: "Tattoo",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tattoo",
      url: "./img/constructor/tattoo/tattoo1.png",
      name: "Tattoo",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
    {
      title: "Tattoo",
      url: "./img/constructor/tattoo/tattoo1.png",
      name: "Tattoo",
      description: "= Keeps you clear, precise & focused. Cuts through ignorance.",
    },
  ];

  const bgWrapper = document.querySelector("#backgrounds");
  const bodyWrapper = document.querySelector("#bodybase");
  const feetWrapper = document.querySelector("#feet");
  const eyesWrapper = document.querySelector("#eyes");
  const crownsWrapper = document.querySelector("#crowns");
  const beaksWrapper = document.querySelector("#beaks");
  const tanksWrapper = document.querySelector("#tanks");
  const necklacesWrapper = document.querySelector("#necklaces");
  const wingsWrapper = document.querySelector("#wings");
  const facepaintWrapper = document.querySelector("#facepaint");
  const tailsWrapper = document.querySelector("#tails");
  const tattooWrapper = document.querySelector("#tattoo");


  const constructorBg = document.querySelector(".constructor__bg");
  // const resultBackground = document.querySelector(".background");
  // const resultBodybase = document.querySelector(".bodybase");
  // const resultFeet = document.querySelector(".feet");
  // const resultEyes = document.querySelector(".eyes");
  // const resultCrowns = document.querySelector(".crowns");
  // const resultBeaks = document.querySelector(".beaks");
  // const resultTanks = document.querySelector(".tanks");
  // const resultNecklaces = document.querySelector(".necklaces");
  // const resultWings = document.querySelector(".wings");
  // const resultFacepaint = document.querySelector(".facepaint");
  // const resultTails = document.querySelector(".tails");
  // const resultTattoo = document.querySelector(".tattoo");
  const imgWrapper = document.querySelectorAll(".tab__content").length;

  const description = document.getElementById("description");
  const tagsWrapper = document.getElementById("tagsWrapper");

  const loadBackgrounds = () => {
    background.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      bgWrapper.appendChild(container);
    });
  };

  loadBackgrounds()

  const myTimeout = setTimeout(start, 1000);
  function start() {
    const firstBlock = document.getElementById("backgrounds").firstElementChild.firstChild;
    firstBlock.click();
  }
  function finish() {
    clearTimeout(myTimeout);
  }

  const loadBody = () => {
    body.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      bodyWrapper.appendChild(container);
    });
  };
  loadBody();

  const loadFeet = () => {
    feet.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      feetWrapper.appendChild(container);
    });
  };
  loadFeet();

  const loadEyes = () => {
    eyes.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      eyesWrapper.appendChild(container);
    });
  };
  loadEyes();

  const loadCrowns = () => {
    crowns.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      crownsWrapper.appendChild(container);
    });
  };
  loadCrowns();

  const loadBeaks = () => {
    beaks.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      beaksWrapper.appendChild(container);
    });
  };
  loadBeaks();


  const loadTanks = () => {
    tanks.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      tanksWrapper.appendChild(container);
    });
  };
  loadTanks();

  const loadNecklaces = () => {
    necklaces.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      necklacesWrapper.appendChild(container);
    });
  };
  loadNecklaces();

  const loadWings = () => {
    wings.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      wingsWrapper.appendChild(container);
    });
  };
  loadWings();

  const loadFacepaint = () => {
    facepaint.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      facepaintWrapper.appendChild(container);
    });
  };
  loadFacepaint();

  const loadTails = () => {
    tails.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      tailsWrapper.appendChild(container);
    });
  };
  loadTails();

  const loadTattoo = () => {
    tattoo.forEach(item => {
      const img = document.createElement("img");
      const container = document.createElement("div");
      img.setAttribute("src", item.url);
      img.setAttribute("alt", item.name);
      img.setAttribute("data-target", item.title);
      img.setAttribute("data-description", item.description);
      container.classList.add("constructor__item");
      container.appendChild(img);
      tattooWrapper.appendChild(container);
    });
  };
  loadTattoo();

  const addBackground = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultBackground = document.createElement("img");
    constructorBg.appendChild(resultBackground);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Background") {
          resultBackground.classList.add("constructor__img");
          resultBackground.classList.add("background");
          resultBackground.setAttribute("alt", e.target.getAttribute("data-target"))
          resultBackground.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;

          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";

          tag.addEventListener("click", function () {
            document.querySelector(".background").setAttribute("src", " ");
            document.querySelector(".background").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultBackground.removeAttribute("alt");
            resultBackground.removeAttribute("src");
          });
        }
      });
    });
  }

  addBackground();

  const addBody = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultBodybase = document.createElement("img");
    constructorBg.appendChild(resultBodybase);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Bodybase") {
          resultBodybase.classList.add("constructor__img");
          resultBodybase.classList.add("bodybase");
          resultBodybase.setAttribute("alt", e.target.getAttribute("data-target"))
          resultBodybase.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;
          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";
          tag.addEventListener("click", function () {
            document.querySelector(".bodybase").setAttribute("src", " ");
            document.querySelector(".bodybase").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultBodybase.removeAttribute("alt");
            resultBodybase.removeAttribute("src");
          });
        }
      });
    });
  }
  addBody();

  const addFeet = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultFeet = document.createElement("img");
    constructorBg.appendChild(resultFeet);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Feet") {
          resultFeet.classList.add("constructor__img");
          resultFeet.classList.add("feet");
          resultFeet.setAttribute("alt", e.target.getAttribute("data-target"))
          resultFeet.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;
          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";
          tag.addEventListener("click", function () {
            document.querySelector(".feet").setAttribute("src", " ");
            document.querySelector(".feet").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultFeet.removeAttribute("alt");
            resultFeet.removeAttribute("src");
          });
        }
      });
    });
  }
  addFeet();

  const addEyes = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultEyes = document.createElement("img");
    constructorBg.appendChild(resultEyes);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Eyes") {
          resultEyes.classList.add("constructor__img");
          resultEyes.classList.add("eyes");
          resultEyes.setAttribute("alt", e.target.getAttribute("data-target"))
          resultEyes.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;
          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";
          tag.addEventListener("click", function () {
            document.querySelector(".eyes").setAttribute("src", " ");
            document.querySelector(".eyes").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultEyes.removeAttribute("alt");
            resultEyes.removeAttribute("src");
          });
        }
      });
    });
  }
  addEyes();

  const addCrowns = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultCrowns = document.createElement("img");
    constructorBg.appendChild(resultCrowns);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Crowns") {
          resultCrowns.classList.add("constructor__img");
          resultCrowns.classList.add("crowns");
          resultCrowns.setAttribute("alt", e.target.getAttribute("data-target"))
          resultCrowns.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;
          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";
          tag.addEventListener("click", function () {
            document.querySelector(".crowns").setAttribute("src", " ");
            document.querySelector(".crowns").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultCrowns.removeAttribute("alt");
            resultCrowns.removeAttribute("src");
          });
        }
      });
    });
  }
  addCrowns();

  const addBeaks = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultBeaks = document.createElement("img");
    constructorBg.appendChild(resultBeaks);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Beaks") {
          resultBeaks.classList.add("constructor__img");
          resultBeaks.classList.add("beaks");
          resultBeaks.setAttribute("alt", e.target.getAttribute("data-target"))
          resultBeaks.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;
          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";
          tag.addEventListener("click", function () {
            document.querySelector(".beaks").setAttribute("src", " ");
            document.querySelector(".beaks").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultBeaks.removeAttribute("alt");
            resultBeaks.removeAttribute("src");
          });
        }
      });
    });
  }
  addBeaks();

  const addTanks = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultTanks = document.createElement("img");
    constructorBg.appendChild(resultTanks);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Tanks") {
          resultTanks.classList.add("constructor__img");
          resultTanks.classList.add("tanks");
          resultTanks.setAttribute("alt", e.target.getAttribute("data-target"))
          resultTanks.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;
          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";
          tag.addEventListener("click", function () {
            document.querySelector(".tanks").setAttribute("src", " ");
            document.querySelector(".tanks").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultTanks.removeAttribute("alt");
            resultTanks.removeAttribute("src");
          });
        }
      });
    });
  }
  addTanks();

  const addNecklaces = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultNecklaces = document.createElement("img");
    constructorBg.appendChild(resultNecklaces);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Necklaces") {
          resultNecklaces.classList.add("constructor__img");
          resultNecklaces.classList.add("necklaces");
          resultNecklaces.setAttribute("alt", e.target.getAttribute("data-target"))
          resultNecklaces.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;
          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";
          tag.addEventListener("click", function () {
            document.querySelector(".necklaces").setAttribute("src", " ");
            document.querySelector(".necklaces").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultNecklaces.removeAttribute("alt");
            resultNecklaces.removeAttribute("src");
          });
        }
      });
    });
  }
  addNecklaces();

  const addWings = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultWings = document.createElement("img");
    constructorBg.appendChild(resultWings);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Wings") {
          resultWings.classList.add("constructor__img");
          resultWings.classList.add("wings");
          resultWings.setAttribute("alt", e.target.getAttribute("data-target"))
          resultWings.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;
          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";
          tag.addEventListener("click", function () {
            document.querySelector(".wings").setAttribute("src", " ");
            document.querySelector(".wings").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultWings.removeAttribute("alt");
            resultWings.removeAttribute("src");
          });
        }
      });
    });
  }
  addWings();

  const addFacepaint = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultFacepaint = document.createElement("img");
    constructorBg.appendChild(resultFacepaint);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Facepaint") {
          resultFacepaint.classList.add("constructor__img");
          resultFacepaint.classList.add("facepaint");
          resultFacepaint.setAttribute("alt", e.target.getAttribute("data-target"))
          resultFacepaint.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;
          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";
          tag.addEventListener("click", function () {
            document.querySelector(".facepaint").setAttribute("src", " ");
            document.querySelector(".facepaint").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultFacepaint.removeAttribute("alt");
            resultFacepaint.removeAttribute("src");
          });
        }
      });
    });
  }
  addFacepaint();

  const addTails = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultTails = document.createElement("img");
    constructorBg.appendChild(resultTails);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Tails") {
          resultTails.classList.add("constructor__img");
          resultTails.classList.add("tails");
          resultTails.setAttribute("alt", e.target.getAttribute("data-target"))
          resultTails.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;
          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";
          tag.addEventListener("click", function () {
            document.querySelector(".tails").setAttribute("src", " ");
            document.querySelector(".tails").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultTails.removeAttribute("alt");
            resultTails.removeAttribute("src");
          });
        }
      });
    });
  }
  addTails();

  const addTattoo = () => {
    let images = document.querySelectorAll('.tab__content img');
    const resultTattoo = document.createElement("img");
    constructorBg.appendChild(resultTattoo);
    const descriptionItem = document.createElement("li");
    const tag = document.createElement("button");
    description.appendChild(descriptionItem);
    tagsWrapper.appendChild(tag);
    images.forEach(image => {
      image.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-target") === "Tattoo") {
          resultTattoo.classList.add("constructor__img");
          resultTattoo.classList.add("tattoo");
          resultTattoo.setAttribute("alt", e.target.getAttribute("data-target"))
          resultTattoo.setAttribute("src", e.target.getAttribute("src"));
          let title = e.target.getAttribute("alt");
          let descr = e.target.getAttribute("data-description");
          let name = e.target.getAttribute("data-target");
          descriptionItem.classList.add("description__item");
          descriptionItem.innerHTML =
            `<strong>${title}</strong> ${descr}`;
          tag.classList.add("tag");
          tag.innerHTML = `
          ${name}
          <svg class="svg-remove" data-remove="${name}">
            <use xlink:href="./img/svg/sprite-svg/sprite.svg#close">
            </use>
          </svg>`;
          tag.style.display = "flex";
          tag.addEventListener("click", function () {
            document.querySelector(".tattoo").setAttribute("src", " ");
            document.querySelector(".tattoo").setAttribute("alt", " ");
            tag.classList.remove("tag");
            tag.innerHTML = "";
            tag.style.display = "none";
            descriptionItem.classList.remove("description__item");
            descriptionItem.innerHTML = "";
            resultTattoo.removeAttribute("alt");
            resultTattoo.removeAttribute("src");
          });
        }
      });
    });
  }
  addTattoo();
}