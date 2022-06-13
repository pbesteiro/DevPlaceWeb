let carouselInstances = [];
let width = document.body.clientWidth;
const carousels = document.getElementsByClassName("glide");

const skins = [
  {
    name: "empresas",
    options: {
      destroyInMobile: true,
      destroyInDesktop: false,
      slidesToScroll: 1,
      swipeThreshold: true,
      dragThreshold: true,
      startAt: 0,
      perView: 3.3,
      gap: 20,
      rewind: false,
      bound: true,
      type: "slider",
      breakpoints: {
        1023: {
          perView: 2.3,
        },
        767: {
          perView: 1.3,
        }
      },
    },
  },
  {
    name: "calendar",
    options: {
      destroyInMobile: true,
      destroyInDesktop: false,
      slidesToScroll: 1,
      swipeThreshold: true,
      dragThreshold: true,
      startAt: 0,
      perView: 3.3,
      gap: 20,
      rewind: false,
      bound: true,
      type: "slider",
      breakpoints: {
        1023: {
          perView: 2.3,
        },
        767: {
          perView: 1.3,
        }
      },
    },
  },
  {
    name: "courses",
    options: {
      destroyInMobile: true,
      destroyInDesktop: false,
      slidesToScroll: 1,
      swipeThreshold: true,
      dragThreshold: true,
      startAt: 0,
      perView: 4.3,
      gap: 20,
      rewind: false,
      bound: true,
      type: "slider",
      breakpoints: {
        1199: {
          perView: 3.3,
        },
        1023: {
          perView: 2.3,
        },
        767: {
          perView: 1.3,
        }
      },
    },
  },
  {
    name: "next-dates",
    options: {
      destroyInMobile: true,
      destroyInDesktop: false,
      slidesToScroll: 1,
      swipeThreshold: true,
      dragThreshold: true,
      startAt: 0,
      perView: 3.3,
      gap: 20,
      rewind: false,
      bound: true,
      type: "slider",
      breakpoints: {
        1023: {
          perView: 2.3,
        },
        767: {
          perView: 1.3,
        }
      },
    },
  },
  {
    name: "tools",
    options: {
      type: 'carousel',
      hideArrows: true,
      destroyInMobile: false,
      destroyInDesktop: false,
      slidesToScroll: 1,
      swipeThreshold: false,
      dragThreshold: false,
      startAt: 0,
      perView: 6,
      gap: 64,
      autoplay: 3000,
      rewind: false,
      bound: true,
      breakpoints: {
        1199: {
          perView: 3,
          gap: 24,
        },
        579: {
          perView: 1,
        },
      },
    },
  },
  {
    name: "mentors",
    options: {
      type: 'carousel',
      hideArrows: true,
      destroyInMobile: false,
      destroyInDesktop: false,
      slidesToScroll: 1,
      swipeThreshold: false,
      dragThreshold: false,
      startAt: 0,
      perView: 3,
      gap: 64,
      autoplay: 3000,
      rewind: false,
      bound: true,
      breakpoints: {
        1199: {
          perView: 2,
          gap: 24,
        },
        579: {
          perView: 1,
        },
      },
    },
  },
  {
    name: "students",
    options: {
      type: 'carousel',
      hideArrows: true,
      destroyInMobile: false,
      destroyInDesktop: false,
      slidesToScroll: 1,
      swipeThreshold: false,
      dragThreshold: false,
      startAt: 0,
      perView: 3,
      gap: 64,
      autoplay: 3000,
      rewind: false,
      bound: true,
      breakpoints: {
        1199: {
          perView: 2,
          gap: 24,
        },
        579: {
          perView: 1,
        },
      },
    },
  },
];

const initResponsiveCarusel = (carousel, skin) => {
  const correctSize = () => {
    if(width >= 768){
      return !skin.options.destroyInDesktop
    }
    
    if(width <= 767){      
      return !skin.options.destroyInMobile
    }

    return false
  }

  const correctItems = () => {
    const windowWidth = width;
    const totalItems = carousel.getElementsByClassName("glide__slide").length;
    let currentPerView = skin.options?.perView || 3

    if(skin.options.breakpoints) {
      const breakpoints = Object.keys(skin.options.breakpoints);
      const currentBreackpoint = breakpoints.filter(breakpoint => breakpoint > windowWidth)

      if(currentBreackpoint.length > 0){
        currentPerView = skin.options.breakpoints[currentBreackpoint[0]].perView 
      }
    }

    return totalItems > currentPerView
  }
  
  const initCarousel = correctSize() && correctItems()
  return initCarousel
}

const thereAreCarousels = () => {
  return carousels.length > 0
}

function findAncestor (el, sel) {
  while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
  return el;
}

const initCarousel = () => {
  if (thereAreCarousels()) {
    for (const carousel of carousels) {
      const skin = skins.filter(
        (skin) => skin.name === carousel.dataset.skin
      )[0];

      /**
       * Iniciamos el carousel solo si nos encontramos en el tamaño de pantalla correcto
       */
      const loader = findAncestor(carousel, '.carousel').getElementsByClassName('loader')[0]
      loader.classList.remove('hidden');
      
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 1000)

      setTimeout(() => {
        carousel.style.opacity = 1;
      }, 1500)
      if (initResponsiveCarusel(carousel, skin)) {
        const carouselInstance = new Glide(carousel, skin.options);

        if(skin.options.hideArrows){
          carousel.getElementsByClassName('glide__arrows')[0].innerHTML = ''
        }

        /**
         * Agregamos la funcion destroyCarousel
         * Esta revisara entre las opciones del carousel si debe ser eliminado o no
         */
          carouselInstance.destroyCarousel = () => {
            if (skin.options.destroyInMobile && width <= 767) {
              carouselInstance.destroy();
            }

            if (skin.options.destroyInDesktope && width >= 768) {
              carouselInstance.destroy();
            }
          };
  
          carouselInstances.push(carouselInstance);

        /**
         * Montamos el carousel
         */
        carouselInstance.mount();
      }
    }
  }
};

const reInit = () => {
  for (const carouselInstance of carouselInstances) {
    carouselInstance.destroy();
  }
  
  setTimeout(() => {
    carouselInstances = []
    initCarousel();
  }, 500)
}

var interval;
window.onresize = function(){
  if(width !== document.body.clientWidth){
    width = document.body.clientWidth;
    clearTimeout(interval);
    interval = setTimeout(reInit, 100);
  }
};