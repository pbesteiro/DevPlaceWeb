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
      destroyInMobile: false,
      destroyInDesktop: false,
      slidesToScroll: 1,
      swipeThreshold: false,
      dragThreshold: false,
      startAt: 0,
      perView: 6,
      gap: 64,
      // autoplay: false,
      rewind: false,
      bound: true,
      type: "slider",
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
      destroyInMobile: false,
      destroyInDesktop: false,
      slidesToScroll: 1,
      swipeThreshold: false,
      dragThreshold: false,
      startAt: 0,
      perView: 3,
      gap: 64,
      // autoplay: false,
      rewind: false,
      bound: true,
      type: "slider",
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

const initCarousel = () => {
  if (thereAreCarousels()) {
    for (const carousel of carousels) {
      const skin = skins.filter(
        (skin) => skin.name === carousel.dataset.skin
      )[0];

      /**
       * Iniciamos el carousel solo si nos encontramos en el tamaño de pantalla correcto
       */
      
      if (initResponsiveCarusel(carousel, skin)) {
        const carouselInstance = new Glide(carousel, skin.options);

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
  width = document.body.clientWidth;
  clearTimeout(interval);
  interval = setTimeout(reInit, 100);
};