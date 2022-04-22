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
      startAt: 0,
      perView: 6,
      gap: 64,
      autoplay: 3000,
      breakpoints: {
        767: {
          perView: 4,
          gap: 24,
        },
        579: {
          perView: 2.3,
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
        carouselInstance = new Glide(carousel, skin.options);

        /**
         * Ocultamos o mostramos las arrows
         */
          carouselInstance.on("move.after", () => {
            const currentIndex = carouselInstance.index;
            const totalItems =
              document.getElementsByClassName("glide__slide").length;
            const prevArrow =
              document.getElementsByClassName("glide__arrow--left")[0];
            const nextArrow = document.getElementsByClassName(
              "glide__arrow--right"
            )[0];

            prevArrow.style.display = "block";
            nextArrow.style.display = "block";

            if (currentIndex === 0) {
              prevArrow.style.display = "none";
            }

            if (currentIndex === totalItems - skin.options.perView) {
              nextArrow.style.display = "none";
            }
          });

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
const getPesosArFormat = (price) => {
  const pesos = { style: 'currency', currency: 'ARS' };
  const formatPesosAr = new Intl.NumberFormat('es-AR', pesos);
  return formatPesosAr.format(price);
}

const getDollarUsFormat = (price) => {
  const dollar = { style: 'currency', currency: 'USD' };
  const formatDollar = new Intl.NumberFormat('en-US', dollar);
  return formatPesosAr.format(price);
}

const months = {
  1: {
    large: "Enero",
    short: "Ene",
  },
  2: {
    large: "Febrero",
    short: "Feb",
  },
  3: {
    large: "Marzo",
    short: "Mar",
  },
  4: {
    large: "Abril",
    short: "Abr",
  },
  5: {
    large: "Mayo",
    short: "May",
  },
  6: {
    large: "Junio",
    short: "Jun",
  },
  7: {
    large: "Julio",
    short: "Jul",
  },
  8: {
    large: "Agosto",
    short: "Ago",
  },
  9: {
    large: "Septiembre",
    short: "Sep",
  },
  10: {
    large: "Octubre",
    short: "Oct",
  },
  11: {
    large: "Noviembre",
    short: "Nov",
  },
  12: {
    large: "Diciembre",
    short: "Dic",
  },
};

const days = {
  Mon: {
    large: "lunes",
    short: "lun",
  },
  Tue: {
    large: "martes",
    short: "mar",
  },
  Wed: {
    large: "miercoles",
    short: "mie",
  },
  Thu: {
    large: "jueves",
    short: "jue",
  },
  Fri: {
    large: "viernes",
    short: "vie",
  },
  Sat: {
    large: "sabado",
    short: "sab",
  },
  Sun: {
    large: "domingo",
    short: "dom",
  },
};

const dateSpliter = (date) => {
  const utcDate = setToLocalTimeZone(date);
  const dateObj = moment(utcDate);

  return {
    input: `${dateObj.format("YYYY")}-${dateObj.format("M")}-${dateObj.format(
      "D"
    )}`,
    month: {
      number: dateObj.format("MM"),
      name: months[dateObj.format("M")],
    },
    day: {
      number: dateObj.format("DD"),
      name: days[dateObj.format("ddd")],
    },
    year: dateObj.format("YYYY"),
    hours: dateObj.format("hh"),
    minutes: dateObj.format("mm"),
    seconds: dateObj.format("ss"),
  };
};

const setToLocalTimeZone = (dateTime) => {
  const LocalTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return moment(dateTime).tz(LocalTimeZone).format();
};

const inputDateTimeLocal = (date) => {
  const localTime = setToLocalTimeZone(date);
  return moment(localTime).format(moment.HTML5_FMT.DATETIME_LOCAL);
};

const dropzone = document.getElementById('dropzone')

if(!!dropzone){
 const myDropzone = new Dropzone("#dropzone", { 
    url: "/file/post", 
    maxFilesize: 256, 
    thumbnailWidth: 120, 
    thumbnailHeight: 120, 
    maxFiles: 1, 
    acceptedFiles: "image/jpg, image/png", 
    createImageThumbnails: true
  });
  myDropzone.on("complete", function(file) {
    const cleanDropzone =  document.getElementsByClassName("dz-delete-image")
    for(const cta of cleanDropzone){
      cta.onclick=function() {
        myDropzone.removeAllFiles();
      };
    }
  });
}

const paisField = document.getElementById("pais");

if(!!paisField){
  paisField.addEventListener('change', (event) => {
    var dialCode =
      event.currentTarget.options[event.target.selectedIndex].dataset.dialcode;
    document.getElementById("country-code").innerText = "+" + dialCode;
  });
}

const inputs = document.getElementsByTagName('input')
const selects = document.getElementsByTagName('select')
const textareas = document.getElementsByTagName('textarea')

if(!!inputs){
  for (const input of inputs) {
    input.addEventListener('keyup', (event) => {
      if(event.currentTarget.classList.contains("just-validate-error-field")){
  
        event.currentTarget.parentNode.classList.add('field-error')
      } 
      
      if(event.currentTarget.classList.contains("just-validate-success-field")) {
        event.currentTarget.parentNode.classList.remove('field-error')
      }
    })
  }

  for (const select of selects) {
    select.addEventListener('change', (event) => {
      if(event.currentTarget.classList.contains("just-validate-error-field")){
  
        event.currentTarget.parentNode.classList.add('field-error')
      } 
      
      if(event.currentTarget.classList.contains("just-validate-success-field")) {
        event.currentTarget.parentNode.classList.remove('field-error')
      }
    })
  }

  for (const textarea of textareas) {
    textarea.addEventListener('keyup', (event) => {
      if(event.currentTarget.classList.contains("just-validate-error-field")){
  
        event.currentTarget.parentNode.classList.add('field-error')
      } 
      
      if(event.currentTarget.classList.contains("just-validate-success-field")) {
        event.currentTarget.parentNode.classList.remove('field-error')
      }
    })
  }
}

const saveInLocalSoterage = (formId) => {
  const form = document.getElementById(formId)
  const formData = new FormData(form);
  let data = []

  
  for (var [key, value] of formData.entries()) { 
    const element = form.querySelector('[name="' + key + '"]');
    let type = 'other';

    if (element.tagName == "INPUT") {
      type = element.type
    }
  
    if (element.tagName == "SELECT") {
      type = 'select'
    }

    data.push({type, key, value});
  }

  localStorage.setItem(
    formId, 
    JSON.stringify(data)
  );
}

const fillWithLocalStorageInfo = (formId) => {
  const fields = JSON.parse(localStorage.getItem(formId))

  if(!!fields){
    fields.forEach(field => {
      const element = document.querySelectorAll('[name="' + field.key + '"]');
      
      for (const item of element) {
        if(field.type === 'checkbox' || field.type === 'radio'){
          item.checked = item.value === field.value 
        } else {
          item.value = field.value
        }
      }
    });
  }
}
/*!
 * Glide.js v3.5.2
 * (c) 2013-2021 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Glide=e()}(this,(function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t,e){return o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}function s(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var o=r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return s(this,n)}}function u(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=u(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},c.apply(this,arguments)}var l={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function f(t){console.error("[Glide warn]: ".concat(t))}function d(t){return parseInt(t)}function h(t){return"string"==typeof t}function v(e){var n=t(e);return"function"===n||"object"===n&&!!e}function p(t){return"function"==typeof t}function m(t){return void 0===t}function g(t){return t.constructor===Array}function y(t,e,n){var i={};for(var r in e)p(e[r])?i[r]=e[r](t,i,n):f("Extension must be a function");for(var o in i)p(i[o].mount)&&i[o].mount();return i}function b(t,e,n){Object.defineProperty(t,e,n)}function w(t,e){var n=Object.assign({},t,e);return e.hasOwnProperty("classes")&&(n.classes=Object.assign({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=Object.assign({},t.classes.direction,e.classes.direction)),e.classes.hasOwnProperty("type")&&(n.classes.type=Object.assign({},t.classes.type,e.classes.type)),e.classes.hasOwnProperty("slide")&&(n.classes.slide=Object.assign({},t.classes.slide,e.classes.slide)),e.classes.hasOwnProperty("arrow")&&(n.classes.arrow=Object.assign({},t.classes.arrow,e.classes.arrow)),e.classes.hasOwnProperty("nav")&&(n.classes.nav=Object.assign({},t.classes.nav,e.classes.nav))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},t.breakpoints,e.breakpoints)),n}var _=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.events=n,this.hop=n.hasOwnProperty}return i(t,[{key:"on",value:function(t,e){if(!g(t)){this.hop.call(this.events,t)||(this.events[t]=[]);var n=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][n]}}}for(var i=0;i<t.length;i++)this.on(t[i],e)}},{key:"emit",value:function(t,e){if(g(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);else this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),k=function(){function t(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,t),this._c={},this._t=[],this._e=new _,this.disabled=!1,this.selector=n,this.settings=w(l,i),this.index=this.settings.startAt}return i(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),v(t)?this._c=y(this,t,this._e):f("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return g(t)?this._t=t:f("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=w(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){v(t)?this._o=t:f("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=d(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function S(){return(new Date).getTime()}function H(t,e,n){var i,r,o,s,a=0;n||(n={});var u=function(){a=!1===n.leading?0:S(),i=null,s=t.apply(r,o),i||(r=o=null)},c=function(){var c=S();a||!1!==n.leading||(a=c);var l=e-(c-a);return r=this,o=arguments,l<=0||l>e?(i&&(clearTimeout(i),i=null),a=c,s=t.apply(r,o),i||(r=o=null)):i||!1===n.trailing||(i=setTimeout(u,l)),s};return c.cancel=function(){clearTimeout(i),a=0,i=r=o=null},c}var O={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function T(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function x(t){return!!(t&&t instanceof window.HTMLElement)}var A='[data-glide-el="track"]';var j=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.listeners=n}return i(t,[{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];h(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=n,e.addEventListener(t[r],this.listeners[t[r]],i)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];h(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}();var R=["ltr","rtl"],P={">":"<","<":">","=":"="};function C(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function M(t,e){return{modify:function(t){var n=Math.floor(t/e.Sizes.slideWidth);return t+e.Gaps.value*n}}}function z(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function E(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return v(i)?n-i.before:n-i}return n}}}function L(t,e){return{modify:function(n){var i=e.Gaps.value,r=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}var D=!1;try{var B=Object.defineProperty({},"passive",{get:function(){D=!0}});window.addEventListener("testPassive",null,B),window.removeEventListener("testPassive",null,B)}catch(t){}var W=D,q=["touchstart","mousedown"],I=["touchmove","mousemove"],V=["touchend","touchcancel","mouseup","mouseleave"],G=["mousedown","mousemove","mouseup","mouseleave"];var F='[data-glide-el^="controls"]',N="".concat(F,' [data-glide-dir*="<"]'),Y="".concat(F,' [data-glide-dir*=">"]');function X(t){return v(t)?(e=t,Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t[n],t}),{})):(f("Breakpoints option must be an object"),{});var e}var K={Html:function(t,e,n){var i={mount:function(){this.root=t.selector,this.track=this.root.querySelector(A),this.collectSlides()},collectSlides:function(){this.slides=Array.prototype.slice.call(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.slide.clone)}))}};return b(i,"root",{get:function(){return i._r},set:function(t){h(t)&&(t=document.querySelector(t)),x(t)?i._r=t:f("Root element must be a existing Html node")}}),b(i,"track",{get:function(){return i._t},set:function(t){x(t)?i._t=t:f("Could not find track element. Please use ".concat(A," attribute."))}}),b(i,"wrapper",{get:function(){return i.track.children[0]}}),n.on("update",(function(){i.collectSlides()})),i},Translate:function(t,e,n){var i={set:function(n){var i=function(t,e,n){var i=[M,z,E,L].concat(t._t,[C]);return{mutate:function(r){for(var o=0;o<i.length;o++){var s=i[o];p(s)&&p(s().modify)?r=s(t,e,n).modify(r):f("Transformer should be a function that returns an object with `modify()` method")}return r}}}(t,e).mutate(n),r="translate3d(".concat(-1*i,"px, 0px, 0px)");e.Html.wrapper.style.mozTransform=r,e.Html.wrapper.style.webkitTransform=r,e.Html.wrapper.style.transform=r},remove:function(){e.Html.wrapper.style.transform=""},getStartIndex:function(){var n=e.Sizes.length,i=t.index,r=t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?n+(i-r):(i+r)%n},getTravelDistance:function(){var n=e.Sizes.slideWidth*t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?-1*n:n}};return n.on("move",(function(r){if(!t.isType("carousel")||!e.Run.isOffset())return i.set(r.movement);e.Transition.after((function(){n.emit("translate.jump"),i.set(e.Sizes.slideWidth*t.index)}));var o=e.Sizes.slideWidth*e.Translate.getStartIndex();return i.set(o-e.Translate.getTravelDistance())})),n.on("destroy",(function(){i.remove()})),i},Transition:function(t,e,n){var i=!1,r={compose:function(e){var n=t.settings;return i?"".concat(e," 0ms ").concat(n.animationTimingFunc):"".concat(e," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return b(r,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(P[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return b(i,"value",{get:function(){return i._v},set:function(t){R.indexOf(t)>-1?i._v=t:f("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i},Peek:function(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return b(i,"value",{get:function(){return i._v},set:function(t){v(t)?(t.before=d(t.before),t.after=d(t.after)):t=d(t),i._v=t}}),b(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return v(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t="".concat(this.slideWidth,"px"),n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(){e.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return b(i,"length",{get:function(){return e.Html.slides.length}}),b(i,"width",{get:function(){return e.Html.track.offsetWidth}}),b(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),b(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var r=t[n].style,o=e.Direction.value;r[O[o][0]]=0!==n?"".concat(this.value/2,"px"):"",n!==t.length-1?r[O[o][1]]="".concat(this.value/2,"px"):r[O[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return b(i,"value",{get:function(){return d(t.settings.gap)}}),b(i,"grow",{get:function(){return i.value*e.Sizes.length}}),b(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],H((function(){i.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(e.Html.wrapper.children)})),i},Move:function(t,e,n){var i={mount:function(){this._o=0},make:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return b(i,"offset",{get:function(){return i._o},set:function(t){i._o=m(t)?0:d(t)}}),b(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),b(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,r=t.settings,o=r.perView,s=r.classes,a=r.cloningRatio;if(0!==i.length)for(var u=+!!t.settings.peek,c=o+u+Math.round(o/2),l=i.slice(0,c).reverse(),f=i.slice(-1*c),d=0;d<Math.max(a,Math.floor(o/i.length));d++){for(var h=0;h<l.length;h++){var v=l[h].cloneNode(!0);v.classList.add(s.slide.clone),n.push(v)}for(var p=0;p<f.length;p++){var m=f[p].cloneNode(!0);m.classList.add(s.slide.clone),n.unshift(m)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,r=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),a=t.slice(-1*o).reverse(),u="".concat(e.Sizes.slideWidth,"px"),c=0;c<a.length;c++)i.appendChild(a[c]);for(var l=0;l<s.length;l++)i.insertBefore(s[l],r[0]);for(var f=0;f<t.length;f++)t[f].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return b(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){t.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(t,e,n){var i=new j,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,H((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes.type[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.slide.active),T(i).forEach((function(t){t.classList.remove(n.slide.active)})))},removeClasses:function(){var n=t.settings.classes,i=n.type,r=n.slide;e.Html.root.classList.remove(i[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(r.active)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(t,e,n){var i={mount:function(){this._o=!1},make:function(i){var r=this;t.disabled||(!t.settings.waitForTransition||t.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move),r.isEnd()&&n.emit("run.end",r.move),r.isOffset()&&(r._o=!1,n.emit("run.offset",r.move)),n.emit("run.after",r.move),t.enable()})))},calculate:function(){var e=this.move,n=this.length,r=e.steps,o=e.direction,s=1;if("="===o)return t.settings.bound&&d(r)>n?void(t.index=n):void(t.index=r);if(">"!==o||">"!==r)if("<"!==o||"<"!==r){if("|"===o&&(s=t.settings.perView||1),">"===o||"|"===o&&">"===r){var a=function(e){var n=t.index;if(t.isType("carousel"))return n+e;return n+(e-n%e)}(s);return a>n&&(this._o=!0),void(t.index=function(e,n){var r=i.length;if(e<=r)return e;if(t.isType("carousel"))return e-(r+1);if(t.settings.rewind)return i.isBound()&&!i.isEnd()?r:0;if(i.isBound())return r;return Math.floor(r/n)*n}(a,s))}if("<"===o||"|"===o&&"<"===r){var u=function(e){var n=t.index;if(t.isType("carousel"))return n-e;return(Math.ceil(n/e)-1)*e}(s);return u<0&&(this._o=!0),void(t.index=function(e,n){var r=i.length;if(e>=0)return e;if(t.isType("carousel"))return e+(r+1);if(t.settings.rewind)return i.isBound()&&i.isStart()?r:Math.floor(r/n)*n;return 0}(u,s))}f("Invalid direction pattern [".concat(o).concat(r,"] has been used"))}else t.index=0;else t.index=n},isStart:function(){return t.index<=0},isEnd:function(){return t.index>=this.length},isOffset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return t?!!this._o&&("|>"===t?"|"===this.move.direction&&">"===this.move.steps:"|<"===t?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===t):this._o},isBound:function(){return t.isType("slider")&&"center"!==t.settings.focusAt&&t.settings.bound}};return b(i,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?d(e)?d(e):e:0}}}),b(i,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return this.isBound()?i-1-(d(n.perView)-1)+d(n.focusAt):i-1}}),b(i,"offset",{get:function(){return this._o}}),i},Swipe:function(t,e,n){var i=new j,r=0,o=0,s=0,a=!1,u=!!W&&{passive:!0},c={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var i=this.touches(e);r=null,o=d(i.pageX),s=d(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!t.disabled){var a=t.settings,u=a.touchAngle,c=a.touchRatio,l=a.classes,f=this.touches(i),h=d(f.pageX)-o,v=d(f.pageY)-s,p=Math.abs(h<<2),m=Math.abs(v<<2),g=Math.sqrt(p+m),y=Math.sqrt(m);if(!(180*(r=Math.asin(y/g))/Math.PI<u))return!1;i.stopPropagation(),e.Move.make(h*parseFloat(c)),e.Html.root.classList.add(l.dragging),n.emit("swipe.move")}},end:function(i){if(!t.disabled){var s=t.settings,a=s.perSwipe,u=s.touchAngle,c=s.classes,l=this.touches(i),f=this.threshold(i),d=l.pageX-o,h=180*r/Math.PI;this.enable(),d>f&&h<u?e.Run.make(e.Direction.resolve("".concat(a,"<"))):d<-f&&h<u?e.Run.make(e.Direction.resolve("".concat(a,">"))):e.Move.make(),e.Html.root.classList.remove(c.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=t.settings,o=r.swipeThreshold,s=r.dragThreshold;o&&i.on(q[0],e.Html.wrapper,(function(t){n.start(t)}),u),s&&i.on(q[1],e.Html.wrapper,(function(t){n.start(t)}),u)},unbindSwipeStart:function(){i.off(q[0],e.Html.wrapper,u),i.off(q[1],e.Html.wrapper,u)},bindSwipeMove:function(){var n=this;i.on(I,e.Html.wrapper,H((function(t){n.move(t)}),t.settings.throttle),u)},unbindSwipeMove:function(){i.off(I,e.Html.wrapper,u)},bindSwipeEnd:function(){var t=this;i.on(V,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function(){i.off(V,e.Html.wrapper)},touches:function(t){return G.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return G.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)})),n.on("destroy",(function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),i.destroy()})),c},Images:function(t,e,n){var i=new j,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Anchors:function(t,e,n){var i=new j,r=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){o&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1;r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0;r=!1}return this}};return b(s,"items",{get:function(){return s._a}}),n.on("swipe.move",(function(){s.detach()})),n.on("swipe.end",(function(){e.Transition.after((function(){s.attach()}))})),n.on("destroy",(function(){s.attach(),s.unbind(),i.destroy()})),s},Controls:function(t,e,n){var i=new j,r=!!W&&{passive:!0},o={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll(F),this._arrowControls={previous:e.Html.root.querySelectorAll(N),next:e.Html.root.querySelectorAll(Y)},this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i&&i&&(i.classList.add(n.classes.nav.active),T(i).forEach((function(t){t.classList.remove(n.classes.nav.active)})))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.nav.active)},setArrowState:function(){if(!t.settings.rewind){var n=o._arrowControls.next,i=o._arrowControls.previous;this.resetArrowState(n,i),0===t.index&&this.disableArrow(i),t.index===e.Run.length&&this.disableArrow(n)}},resetArrowState:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){t.forEach((function(t){t.classList.remove(e.classes.arrow.disabled)}))}))},disableArrow:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){t.forEach((function(t){t.classList.add(e.classes.arrow.disabled)}))}))},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,r)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){W||"touchstart"!==t.type||t.preventDefault();var n=t.currentTarget.getAttribute("data-glide-dir");e.Run.make(e.Direction.resolve(n))}};return b(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on(["mount.after","run"],(function(){o.setArrowState()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),i.destroy()})),o},Keyboard:function(t,e,n){var i=new j,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(n){var i=t.settings.perSwipe;39===n.keyCode&&e.Run.make(e.Direction.resolve("".concat(i,">"))),37===n.keyCode&&e.Run.make(e.Direction.resolve("".concat(i,"<")))}};return n.on(["destroy","update"],(function(){r.unbind()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Autoplay:function(t,e,n){var i=new j,r={mount:function(){this.enable(),this.start(),t.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var i=this;this._e&&(this.enable(),t.settings.autoplay&&m(this._i)&&(this._i=setInterval((function(){i.stop(),e.Run.make(">"),i.start(),n.emit("autoplay")}),this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",e.Html.root,(function(){t._e&&t.stop()})),i.on("mouseout",e.Html.root,(function(){t._e&&t.start()}))},unbind:function(){i.off(["mouseover","mouseout"],e.Html.root)}};return b(r,"time",{get:function(){var n=e.Html.slides[t.index].getAttribute("data-glide-autoplay");return d(n||t.settings.autoplay)}}),n.on(["destroy","update"],(function(){r.unbind()})),n.on(["run.before","swipe.start","update"],(function(){r.stop()})),n.on(["pause","destroy"],(function(){r.disable(),r.stop()})),n.on(["run.after","swipe.end"],(function(){r.start()})),n.on(["play"],(function(){r.enable(),r.start()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Breakpoints:function(t,e,n){var i=new j,r=t.settings,o=X(r.breakpoints),s=Object.assign({},r),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: ".concat(e,"px)")).matches)return t[e];return s}};return Object.assign(r,a.match(o)),i.on("resize",window,H((function(){t.settings=w(r,a.match(o))}),t.settings.throttle)),n.on("update",(function(){o=X(o),s=Object.assign({},r)})),n.on("destroy",(function(){i.off("resize",window)})),a}},J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(s,t);var n=a(s);function s(){return e(this,s),n.apply(this,arguments)}return i(s,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c(r(s.prototype),"mount",this).call(this,Object.assign({},K,t))}}]),s}(k);return J}));
const cards = document.querySelectorAll(".animated")

let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let callback = (entries) => {
  entries.forEach(entry => {
    console.log(entry)
  });
};

let observer = new IntersectionObserver(callback, options);

cards.forEach((card) => {
  observer.observe(card)
})

function markdownTranspiler(md){
  //ul
  md = md.replace(/^\s*\n\>/gm, '<ul>\n*');
  md = md.replace(/^(\>.+)\s*\n([^\>])/gm, '$1\n</ul>\n\n$2');
  md = md.replace(/^\>(.+)/gm, '<li>$1</li>');
  
  //ol
  md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
  md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
  md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
  
  //blockquote
  md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
  
  //h
  md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
  md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
  md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
  md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
  md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
  md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');
  
  //alt h
  md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
  md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');
  
  //images
  md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
  
  //links
  md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');
  
  //font styles
  md = md.replace(/[\*]{3}([^\*]+)[\*]{3}/g, '<b>$1</b>');
  md = md.replace(/[\*]{2}([^]*)[\*]{2}/g, '<em>$1</em>');
  md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
  md = md.replace(/[\_]{1}([^\_]+)[\_]{1}/g, '<u>$1</u>');
  
  //pre
  md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
  md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
  
  //code
  md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');

  //Breack Row
  md = md.replace(/\\n/g, '<br/>')
  
  
  return md;
}
//p
// md = md.replace(/^\s*(\n)?(.+)/gm, function(m){
//   return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
// });

//strip p from pre
//md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');

// var rawMode = true;
//     mdEl = document.getElementById('markdown'),
//     outputEl = document.getElementById('output-html'),
//     parse = function(){
//       outputEl[rawMode ? "innerText" : "innerHTML"] = parseMd(mdEl.innerText);
//     };

// parse();
// mdEl.addEventListener('keyup', parse, false);

//Raw mode trigger btn
(function(){
  
  // var trigger = document.getElementById('raw-switch'),
  //     status = trigger.getElementsByTagName('span')[0],
  //     updateStatus = function(){
  //       status.innerText = rawMode ? 'On' : 'Off';
  //     };

  // updateStatus();

  // trigger.addEventListener('click', function(e){
  //   e.preventDefault();
  //   rawMode = rawMode ? false : true;
  //   updateStatus();
  //   parse();
  // }, false);
}());
const getMenuItems = () => {
  const menuItems = document.getElementsByClassName("menu-link");

  for (let i = 0; i < menuItems.length; i++) {
    //menuItems[i].addEventListener('click', fetchPage, false);
  }
}

const getSidebarMenuWithSubmenu = () => {
  const sidebarItemWithSubmenu = document.getElementsByClassName("open-submenu");

  for (let i = 0; i < sidebarItemWithSubmenu.length; i++) {
    sidebarItemWithSubmenu[i].addEventListener('click', openSubmenu, false);
  }
}

const openSubmenu = (event) => {
  event.preventDefault();
  const submenuId = event.currentTarget.nextElementSibling.id;

  toggleSubmenu(submenuId);
}

const menuDarkMode = (event) => {
  const scrollTop = window.scrollY
  const header = document.getElementsByTagName('header')[0]

  if(scrollTop > 50){
    header.classList.add("dark-mode");
  } else {
    header.classList.remove("dark-mode");
  }
}

const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)

// const fetchPage = ( nextUrl, subdirectory = "" ) => {
//   if(nextUrl && typeof nextUrl === 'object'){
//     nextUrl.preventDefault()
//   }

//   const body = document.getElementsByTagName("body")[0];
//   const currentUrl = window.location;
//   const baseUrl = currentUrl.protocol + "//" + currentUrl.hostname + subdirectory;
//   const page = typeof nextUrl === 'object' ? getLastItem(nextUrl?.currentTarget?.href) : nextUrl;
//   body.classList.toggle("loading");

//   fetch(baseUrl + '?page=' + page.replace('.php', '')).then(function (response) {
//     return response.text();
//   }).then(function (html) {
//     var parser = new DOMParser();
//     const pageName = page.replace('.php', '');
// 	  var doc = parser.parseFromString(html, 'text/html');
//     body.innerHTML = doc.getElementsByTagName('body')[0].innerHTML;
    
//     const newUrl = page !== 'home' ? subdirectory + '/' + page : '/';
//     window.history.pushState(
//       {
//         name: pageName, 
//         page: newUrl
//       }, 
//       pageName, 
//       newUrl
//     );
    
//     window.scrollTo(0, 0);

//     body.classList.toggle("loading");

//     init();
//   }).catch(function (error) {
//     console.warn('Page not found.', error);
//   });
// };

// window.addEventListener("popstate", () => {
//   console.log('popstate', history)
//   if(history.state){

//     fetchPage(history.state.page)
//   }
//   // if the state is the page you expect, pull the name and load it.
//   if (history.state && "Price Deck" === history.state.page) {
//     load(history.state.name, true);
//   }
// });

const goToUrl = (nextUrl, subdirectory = "") => {
  if(nextUrl && typeof nextUrl === 'object'){
    nextUrl.preventDefault()
  }

  const nextPage = typeof nextUrl === 'object' ? getLastItem(nextUrl?.currentTarget?.href) : nextUrl;
  const newUrl = nextPage !== 'home' ? subdirectory + '/' + nextPage : '/';

  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = newUrl;
  document.body.appendChild(a);
  a.click();
}
const initModals = () => {
  const showModalTriggers = document.getElementsByClassName('show-modal')
  const hideModalTriggers = document.getElementsByClassName('hide-modal')
  const allModals = document.getElementsByClassName('modal')
  const backdrop = document.getElementById("backdrop");
  
  for (const showModalTrigger of showModalTriggers) {
    showModalTrigger.addEventListener('click', (event) => {
      const targetModal = event.currentTarget.dataset.modal
      const modal = document.getElementById(targetModal)
  
      toggleModal(modal)
    });
  }
  
  for (const hideModalTrigger of hideModalTriggers) {
    hideModalTrigger.addEventListener('click', (event) => {
      const targetModal = event.currentTarget.dataset.modal
      const modal = document.getElementById(targetModal)
  
      toggleModal(modal)
    });
  }
  
  backdrop.addEventListener('click', () => {
    for (const modal of allModals) {
      modal.addEventListener('click', (event) => {
        const targetModal = event.currentTarget.dataset.modal
        const modal = document.getElementById(targetModal)
    
        toggleModal(modal)
      });
    }
  });
}

const toggleModal = (modal) => {
  if(modal.classList.contains("showing") || modal.classList.contains("show-out")){
    setTimeout(() => {
      backdrop.classList.toggle("show-out");
      modal.classList.toggle("show-out");
    }, 500)
  }
  
  if(modal.classList.contains("showing")){
    setTimeout(() => {
      backdrop.classList.toggle("show-in");
      modal.classList.toggle("show-in");
    }, 500)
  }else{
    backdrop.classList.toggle("show-in");
    modal.classList.toggle("show-in");
  }
  
  modal.classList.toggle("showing");
  backdrop.classList.toggle("showing");
  document.getElementsByTagName('body')[0].classList('')
}

const showModal = (idModal) => {
  const modal = document.getElementById(idModal)
  toggleModal(modal)
}

const hideModal = (idModal) => {
  const modal = document.getElementById(idModal)
  toggleModal(modal)
}




/*
*   Stripe WebGl Gradient Animation by Stripe.com
*   ScrollObserver functionality to disable animation when not scrolled into view has been disabled and 
*   commented out for now.
*/


//Converting colors to proper format
function normalizeColor(hexCode) {
  return [(hexCode >> 16 & 255) / 255, (hexCode >> 8 & 255) / 255, (255 & hexCode) / 255]
} ["SCREEN", "LINEAR_LIGHT"].reduce((hexCode, t, n) => Object.assign(hexCode, {
  [t]: n
}), {});

//Essential functionality of WebGl
//t = width
//n = height
class MiniGl {
  constructor(canvas, width, height, debug = false) {
      const _miniGl = this,
          debug_output = -1 !== document.location.search.toLowerCase().indexOf("debug=webgl");
      _miniGl.canvas = canvas, _miniGl.gl = _miniGl.canvas.getContext("webgl", {
          antialias: true
      }), _miniGl.meshes = [];
      const context = _miniGl.gl;
      width && height && this.setSize(width, height), _miniGl.lastDebugMsg, _miniGl.debug = debug && debug_output ? function(e) {
          const t = new Date;
          t - _miniGl.lastDebugMsg > 1e3 && console.log("---"), console.log(t.toLocaleTimeString() + Array(Math.max(0, 32 - e.length)).join(" ") + e + ": ", ...Array.from(arguments).slice(1)), _miniGl.lastDebugMsg = t
      } : () => {}, Object.defineProperties(_miniGl, {
          Material: {
              enumerable: false,
              value: class {
                  constructor(vertexShaders, fragments, uniforms = {}) {
                      const material = this;
                      function getShaderByType(type, source) {
                          const shader = context.createShader(type);
                          return context.shaderSource(shader, source), context.compileShader(shader), context.getShaderParameter(shader, context.COMPILE_STATUS) || console.error(context.getShaderInfoLog(shader)), _miniGl.debug("Material.compileShaderSource", {
                              source: source
                          }), shader
                      }
                      function getUniformVariableDeclarations(uniforms, type) {
                          return Object.entries(uniforms).map(([uniform, value]) => value.getDeclaration(uniform, type)).join("\n")
                      }
                      material.uniforms = uniforms, material.uniformInstances = [];

                      const prefix = "\n              precision highp float;\n            ";
                      material.vertexSource = `\n              ${prefix}\n              attribute vec4 position;\n              attribute vec2 uv;\n              attribute vec2 uvNorm;\n              ${getUniformVariableDeclarations(_miniGl.commonUniforms,"vertex")}\n              ${getUniformVariableDeclarations(uniforms,"vertex")}\n              ${vertexShaders}\n            `,
                      material.Source = `\n              ${prefix}\n              ${getUniformVariableDeclarations(_miniGl.commonUniforms,"fragment")}\n              ${getUniformVariableDeclarations(uniforms,"fragment")}\n              ${fragments}\n            `,
                      material.vertexShader = getShaderByType(context.VERTEX_SHADER, material.vertexSource),
                      material.fragmentShader = getShaderByType(context.FRAGMENT_SHADER, material.Source),
                      material.program = context.createProgram(),
                      context.attachShader(material.program, material.vertexShader),
                      context.attachShader(material.program, material.fragmentShader),
                      context.linkProgram(material.program),
                      context.getProgramParameter(material.program, context.LINK_STATUS) || console.error(context.getProgramInfoLog(material.program)),
                      context.useProgram(material.program),
                      material.attachUniforms(void 0, _miniGl.commonUniforms),
                      material.attachUniforms(void 0, material.uniforms)
                  }
                  //t = uniform
                  attachUniforms(name, uniforms) {
                      //n  = material
                      const material = this;
                      void 0 === name ? Object.entries(uniforms).forEach(([name, uniform]) => {
                          material.attachUniforms(name, uniform)
                      }) : "array" == uniforms.type ? uniforms.value.forEach((uniform, i) => material.attachUniforms(`${name}[${i}]`, uniform)) : "struct" == uniforms.type ? Object.entries(uniforms.value).forEach(([uniform, i]) => material.attachUniforms(`${name}.${uniform}`, i)) : (_miniGl.debug("Material.attachUniforms", {
                          name: name,
                          uniform: uniforms
                      }), material.uniformInstances.push({
                          uniform: uniforms,
                          location: context.getUniformLocation(material.program, name)
                      }))
                  }
              }
          },
          Uniform: {
              enumerable: !1,
              value: class {
                  constructor(e) {
                      this.type = "float", Object.assign(this, e);
                      this.typeFn = {
                          float: "1f",
                          int: "1i",
                          vec2: "2fv",
                          vec3: "3fv",
                          vec4: "4fv",
                          mat4: "Matrix4fv"
                      } [this.type] || "1f", this.update()
                  }
                  update(value) {
                      void 0 !== this.value && context[`uniform${this.typeFn}`](value, 0 === this.typeFn.indexOf("Matrix") ? this.transpose : this.value, 0 === this.typeFn.indexOf("Matrix") ? this.value : null)
                  }
                  //e - name
                  //t - type
                  //n - length
                  getDeclaration(name, type, length) {
                      const uniform = this;
                      if (uniform.excludeFrom !== type) {
                          if ("array" === uniform.type) return uniform.value[0].getDeclaration(name, type, uniform.value.length) + `\nconst int ${name}_length = ${uniform.value.length};`;
                          if ("struct" === uniform.type) {
                              let name_no_prefix = name.replace("u_", "");
                              return name_no_prefix = 
                                name_no_prefix.charAt(0).toUpperCase() + 
                                name_no_prefix.slice(1), 
                                `uniform struct ${name_no_prefix} 
                                {\n` + 
                                Object.entries(uniform.value).map(([name, uniform]) => 
                                uniform.getDeclaration(name, type)
                                .replace(/^uniform/, ""))
                                .join("") 
                                + `\n} ${name}${length>0?`[${length}]`:""};`
                          }
                          return `uniform ${uniform.type} ${name}${length>0?`[${length}]`:""};`
                      }
                  }
              }
          },
          PlaneGeometry: {
              enumerable: !1,
              value: class {
                  constructor(width, height, n, i, orientation) {
                    context.createBuffer(), this.attributes = {
                          position: new _miniGl.Attribute({
                              target: context.ARRAY_BUFFER,
                              size: 3
                          }),
                          uv: new _miniGl.Attribute({
                              target: context.ARRAY_BUFFER,
                              size: 2
                          }),
                          uvNorm: new _miniGl.Attribute({
                              target: context.ARRAY_BUFFER,
                              size: 2
                          }),
                          index: new _miniGl.Attribute({
                              target: context.ELEMENT_ARRAY_BUFFER,
                              size: 3,
                              type: context.UNSIGNED_SHORT
                          })
                      }, this.setTopology(n, i), this.setSize(width, height, orientation)
                  }
                  setTopology(e = 1, t = 1) {
                      const n = this;
                      n.xSegCount = e, n.ySegCount = t, n.vertexCount = (n.xSegCount + 1) * (n.ySegCount + 1), n.quadCount = n.xSegCount * n.ySegCount * 2, n.attributes.uv.values = new Float32Array(2 * n.vertexCount), n.attributes.uvNorm.values = new Float32Array(2 * n.vertexCount), n.attributes.index.values = new Uint16Array(3 * n.quadCount);
                      for (let e = 0; e <= n.ySegCount; e++)
                          for (let t = 0; t <= n.xSegCount; t++) {
                              const i = e * (n.xSegCount + 1) + t;
                              if (n.attributes.uv.values[2 * i] = t / n.xSegCount, n.attributes.uv.values[2 * i + 1] = 1 - e / n.ySegCount, n.attributes.uvNorm.values[2 * i] = t / n.xSegCount * 2 - 1, n.attributes.uvNorm.values[2 * i + 1] = 1 - e / n.ySegCount * 2, t < n.xSegCount && e < n.ySegCount) {
                                  const s = e * n.xSegCount + t;
                                  n.attributes.index.values[6 * s] = i, n.attributes.index.values[6 * s + 1] = i + 1 + n.xSegCount, n.attributes.index.values[6 * s + 2] = i + 1, n.attributes.index.values[6 * s + 3] = i + 1, n.attributes.index.values[6 * s + 4] = i + 1 + n.xSegCount, n.attributes.index.values[6 * s + 5] = i + 2 + n.xSegCount
                              }
                          }
                      n.attributes.uv.update(), n.attributes.uvNorm.update(), n.attributes.index.update(), _miniGl.debug("Geometry.setTopology", {
                          uv: n.attributes.uv,
                          uvNorm: n.attributes.uvNorm,
                          index: n.attributes.index
                      })
                  }
                  setSize(width = 1, height = 1, orientation = "xz") {
                      const geometry = this;
                      geometry.width = width,
                      geometry.height = height,
                      geometry.orientation = orientation,
                      geometry.attributes.position.values && geometry.attributes.position.values.length === 3 * geometry.vertexCount 
                      || (geometry.attributes.position.values = new Float32Array(3 * geometry.vertexCount));
                      const o = width / -2,
                          r = height / -2,
                          segment_width = width / geometry.xSegCount,
                          segment_height = height / geometry.ySegCount;
                      for (let yIndex= 0; yIndex <= geometry.ySegCount; yIndex++) {
                          const t = r + yIndex * segment_height;
                          for (let xIndex = 0; xIndex <= geometry.xSegCount; xIndex++) {
                              const r = o + xIndex * segment_width,
                                  l = yIndex * (geometry.xSegCount + 1) + xIndex;
                              geometry.attributes.position.values[3 * l + "xyz".indexOf(orientation[0])] = r, 
                              geometry.attributes.position.values[3 * l + "xyz".indexOf(orientation[1])] = -t
                          }
                      }
                      geometry.attributes.position.update(), _miniGl.debug("Geometry.setSize", {
                          position: geometry.attributes.position
                      })
                  }
              }
          },
          Mesh: {
              enumerable: !1,
              value: class {
                  constructor(geometry, material) {
                      const mesh = this;
                      mesh.geometry = geometry, mesh.material = material, mesh.wireframe = !1, mesh.attributeInstances = [], Object.entries(mesh.geometry.attributes).forEach(([e, attribute]) => {
                          mesh.attributeInstances.push({
                              attribute: attribute,
                              location: attribute.attach(e, mesh.material.program)
                          })
                      }), _miniGl.meshes.push(mesh), _miniGl.debug("Mesh.constructor", {
                          mesh: mesh
                      })
                  }
                  draw() {
                    context.useProgram(this.material.program), this.material.uniformInstances.forEach(({
                          uniform: e,
                          location: t
                      }) => e.update(t)), this.attributeInstances.forEach(({
                          attribute: e,
                          location: t
                      }) => e.use(t)), context.drawElements(this.wireframe ? context.LINES : context.TRIANGLES, this.geometry.attributes.index.values.length, context.UNSIGNED_SHORT, 0)
                  }
                  remove() {
                      _miniGl.meshes = _miniGl.meshes.filter(e => e != this)
                  }
              }
          },
          Attribute: {
              enumerable: !1,
              value: class {
                  constructor(e) {
                      this.type = context.FLOAT, this.normalized = !1, this.buffer = context.createBuffer(), Object.assign(this, e), this.update()
                  }
                  update() {
                      void 0 !== this.values && (context.bindBuffer(this.target, this.buffer), context.bufferData(this.target, this.values, context.STATIC_DRAW))
                  }
                  attach(e, t) {
                      const n = context.getAttribLocation(t, e);
                      return this.target === context.ARRAY_BUFFER && (context.enableVertexAttribArray(n), context.vertexAttribPointer(n, this.size, this.type, this.normalized, 0, 0)), n
                  }
                  use(e) {
                    context.bindBuffer(this.target, this.buffer), this.target === context.ARRAY_BUFFER && (context.enableVertexAttribArray(e), context.vertexAttribPointer(e, this.size, this.type, this.normalized, 0, 0))
                  }
              }
          }
      });
      const a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      _miniGl.commonUniforms = {
          projectionMatrix: new _miniGl.Uniform({
              type: "mat4",
              value: a
          }),
          modelViewMatrix: new _miniGl.Uniform({
              type: "mat4",
              value: a
          }),
          resolution: new _miniGl.Uniform({
              type: "vec2",
              value: [1, 1]
          }),
          aspectRatio: new _miniGl.Uniform({
              type: "float",
              value: 1
          })
      }
  }
  setSize(e = 640, t = 480) {
      this.width = e, this.height = t, this.canvas.width = e, this.canvas.height = t, this.gl.viewport(0, 0, e, t), this.commonUniforms.resolution.value = [e, t], this.commonUniforms.aspectRatio.value = e / t, this.debug("MiniGL.setSize", {
          width: e,
          height: t
      })
  }
  //left, right, top, bottom, near, far
  setOrthographicCamera(e = 0, t = 0, n = 0, i = -2e3, s = 2e3) {
      this.commonUniforms.projectionMatrix.value = [2 / this.width, 0, 0, 0, 0, 2 / this.height, 0, 0, 0, 0, 2 / (i - s), 0, e, t, n, 1], this.debug("setOrthographicCamera", this.commonUniforms.projectionMatrix.value)
  }
  render() {
      this.gl.clearColor(0, 0, 0, 0), this.gl.clearDepth(1), this.meshes.forEach(e => e.draw())
  }
}



//Sets initial properties
function e(object, propertyName, val) {
  return propertyName in object ? Object.defineProperty(object, propertyName, {
      value: val,
      enumerable: !0,
      configurable: !0,
      writable: !0
  }) : object[propertyName] = val, object
}

//Gradient object
class Gradient {
  constructor(...t) {
      e(this, "el", void 0), e(this, "cssVarRetries", 0), e(this, "maxCssVarRetries", 200), e(this, "angle", 0), e(this, "isLoadedClass", !1), e(this, "isScrolling", !1), /*e(this, "isStatic", o.disableAmbientAnimations()),*/ e(this, "scrollingTimeout", void 0), e(this, "scrollingRefreshDelay", 200), e(this, "isIntersecting", !1), e(this, "shaderFiles", void 0), e(this, "vertexShader", void 0), e(this, "sectionColors", void 0), e(this, "computedCanvasStyle", void 0), e(this, "conf", void 0), e(this, "uniforms", void 0), e(this, "t", 1253106), e(this, "last", 0), e(this, "width", void 0), e(this, "minWidth", 1111), e(this, "height", 600), e(this, "xSegCount", void 0), e(this, "ySegCount", void 0), e(this, "mesh", void 0), e(this, "material", void 0), e(this, "geometry", void 0), e(this, "minigl", void 0), e(this, "scrollObserver", void 0), e(this, "amp", 320), e(this, "seed", 5), e(this, "freqX", 14e-5), e(this, "freqY", 29e-5), e(this, "freqDelta", 1e-5), e(this, "activeColors", [1, 1, 1, 1]), e(this, "isMetaKey", !1), e(this, "isGradientLegendVisible", !1), e(this, "isMouseDown", !1), e(this, "handleScroll", () => {
          clearTimeout(this.scrollingTimeout), this.scrollingTimeout = setTimeout(this.handleScrollEnd, this.scrollingRefreshDelay), this.isGradientLegendVisible && this.hideGradientLegend(), this.conf.playing && (this.isScrolling = !0, this.pause())
      }), e(this, "handleScrollEnd", () => {
          this.isScrolling = !1, this.isIntersecting && this.play()
      }), e(this, "resize", () => {
          this.width = window.innerWidth, this.minigl.setSize(this.width, this.height), this.minigl.setOrthographicCamera(), this.xSegCount = Math.ceil(this.width * this.conf.density[0]), this.ySegCount = Math.ceil(this.height * this.conf.density[1]), this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount), this.mesh.geometry.setSize(this.width, this.height), this.mesh.material.uniforms.u_shadow_power.value = this.width < 600 ? 5 : 6
      }), e(this, "handleMouseDown", e => {
          this.isGradientLegendVisible && (this.isMetaKey = e.metaKey, this.isMouseDown = !0, !1 === this.conf.playing && requestAnimationFrame(this.animate))
      }), e(this, "handleMouseUp", () => {
          this.isMouseDown = !1
      }), e(this, "animate", e => {
          if (!this.shouldSkipFrame(e) || this.isMouseDown) {
              if (this.t += Math.min(e - this.last, 1e3 / 15), this.last = e, this.isMouseDown) {
                  let e = 160;
                  this.isMetaKey && (e = -160), this.t += e
              }
              this.mesh.material.uniforms.u_time.value = this.t, this.minigl.render()

          }
          if (0 !== this.last && this.isStatic) return this.minigl.render(), void this.disconnect();
          (/*this.isIntersecting && */this.conf.playing || this.isMouseDown) && requestAnimationFrame(this.animate)
      }), e(this, "addIsLoadedClass", () => {
          /*this.isIntersecting && */!this.isLoadedClass && (this.isLoadedClass = !0, this.el.classList.add("isLoaded"), setTimeout(() => {
              this.el.parentElement.classList.add("isLoaded")
          }, 3e3))
      }), e(this, "pause", () => {
          this.conf.playing = false
      }), e(this, "play", () => {
          requestAnimationFrame(this.animate), this.conf.playing = true
      }), e(this,"initGradient", (selector) => {
        this.el = document.querySelector(selector);
        this.connect();
        return this;
      })
  }
  async connect() {
      this.shaderFiles = {
          vertex: "varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 2.0 + 0.5\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}",
          noise: "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}",
          blend: "//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n\treturn blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n\treturn (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n\treturn 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n\treturn vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n\treturn (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n\treturn base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n\treturn (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n\treturn base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n\treturn vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n\treturn (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n\treturn blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n\treturn (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n\treturn vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n\treturn (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n\treturn vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n\treturn (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n\treturn vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n\treturn (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n\treturn vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n\treturn max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n\treturn vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n\t// Note : Same implementation as BlendSubtractf\n\treturn max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendSubtract\n\treturn max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n\t// Note : Same implementation as BlendAddf\n\treturn min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendAdd\n\treturn min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n\treturn blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n\treturn vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}",
          fragment: "varying vec3 v_color;\n\nvoid main() {\n  vec3 color = v_color;\n  if (u_darken_top == 1.0) {\n    vec2 st = gl_FragCoord.xy/resolution.xy;\n    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n  }\n  gl_FragColor = vec4(color, 1.0);\n}"
      },
      this.conf = {
          presetName: "",
          wireframe: false,
          density: [.06, .16],
          zoom: 1,
          rotation: 0,
          playing: true
      }, 
      document.querySelectorAll("canvas").length < 1 ? console.log("DID NOT LOAD HERO STRIPE CANVAS") : (
        
        this.minigl = new MiniGl(this.el, null, null, !0), 
        requestAnimationFrame(() => {
            this.el && (this.computedCanvasStyle = getComputedStyle(this.el), this.waitForCssVars())
        })
        /*
        this.scrollObserver = await s.create(.1, !1),
        this.scrollObserver.observe(this.el),
        this.scrollObserver.onSeparate(() => {
            window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("mousedown", this.handleMouseDown), window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("keydown", this.handleKeyDown), this.isIntersecting = !1, this.conf.playing && this.pause()
        }), 
        this.scrollObserver.onIntersect(() => {
            window.addEventListener("scroll", this.handleScroll), window.addEventListener("mousedown", this.handleMouseDown), window.addEventListener("mouseup", this.handleMouseUp), window.addEventListener("keydown", this.handleKeyDown), this.isIntersecting = !0, this.addIsLoadedClass(), this.play()
        })*/

      )
  }
  disconnect() {
      this.scrollObserver && (window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("mousedown", this.handleMouseDown), window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("keydown", this.handleKeyDown), this.scrollObserver.disconnect()), window.removeEventListener("resize", this.resize)
  }
  initMaterial() {
      this.uniforms = {
          u_time: new this.minigl.Uniform({
              value: 0
          }),
          u_shadow_power: new this.minigl.Uniform({
              value: 10
          }),
          u_darken_top: new this.minigl.Uniform({
              value: "" === this.el.dataset.jsDarkenTop ? 1 : 0
          }),
          u_active_colors: new this.minigl.Uniform({
              value: this.activeColors,
              type: "vec4"
          }),
          u_global: new this.minigl.Uniform({
              value: {
                  noiseFreq: new this.minigl.Uniform({
                      value: [this.freqX, this.freqY],
                      type: "vec2"
                  }),
                  noiseSpeed: new this.minigl.Uniform({
                      value: 5e-6
                  })
              },
              type: "struct"
          }),
          u_vertDeform: new this.minigl.Uniform({
              value: {
                  incline: new this.minigl.Uniform({
                      value: Math.sin(this.angle) / Math.cos(this.angle)
                  }),
                  offsetTop: new this.minigl.Uniform({
                      value: -.5
                  }),
                  offsetBottom: new this.minigl.Uniform({
                      value: -.5
                  }),
                  noiseFreq: new this.minigl.Uniform({
                      value: [3, 4],
                      type: "vec2"
                  }),
                  noiseAmp: new this.minigl.Uniform({
                      value: this.amp
                  }),
                  noiseSpeed: new this.minigl.Uniform({
                      value: 10
                  }),
                  noiseFlow: new this.minigl.Uniform({
                      value: 3
                  }),
                  noiseSeed: new this.minigl.Uniform({
                      value: this.seed
                  })
              },
              type: "struct",
              excludeFrom: "fragment"
          }),
          u_baseColor: new this.minigl.Uniform({
              value: this.sectionColors[0],
              type: "vec3",
              excludeFrom: "fragment"
          }),
          u_waveLayers: new this.minigl.Uniform({
              value: [],
              excludeFrom: "fragment",
              type: "array"
          })
      };
      for (let e = 1; e < this.sectionColors.length; e += 1) this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({
          value: {
              color: new this.minigl.Uniform({
                  value: this.sectionColors[e],
                  type: "vec3"
              }),
              noiseFreq: new this.minigl.Uniform({
                  value: [2 + e / this.sectionColors.length, 3 + e / this.sectionColors.length],
                  type: "vec2"
              }),
              noiseSpeed: new this.minigl.Uniform({
                  value: 11 + .3 * e
              }),
              noiseFlow: new this.minigl.Uniform({
                  value: 6.5 + .3 * e
              }),
              noiseSeed: new this.minigl.Uniform({
                  value: this.seed + 10 * e
              }),
              noiseFloor: new this.minigl.Uniform({
                  value: .1
              }),
              noiseCeil: new this.minigl.Uniform({
                  value: .63 + .07 * e
              })
          },
          type: "struct"
      }));
      return this.vertexShader = [this.shaderFiles.noise, this.shaderFiles.blend, this.shaderFiles.vertex].join("\n\n"), new this.minigl.Material(this.vertexShader, this.shaderFiles.fragment, this.uniforms)
  }
  initMesh() {
      this.material = this.initMaterial(), this.geometry = new this.minigl.PlaneGeometry, this.mesh = new this.minigl.Mesh(this.geometry, this.material)
  }
  shouldSkipFrame(e) {
      return !!window.document.hidden || (!this.conf.playing || (parseInt(e, 10) % 2 == 0 || void 0))
  }
  updateFrequency(e) {
      this.freqX += e, this.freqY += e
  }
  toggleColor(index) {
      this.activeColors[index] = 0 === this.activeColors[index] ? 1 : 0
  }
  showGradientLegend() {
      this.width > this.minWidth && (this.isGradientLegendVisible = !0, document.body.classList.add("isGradientLegendVisible"))
  }
  hideGradientLegend() {
      this.isGradientLegendVisible = !1, document.body.classList.remove("isGradientLegendVisible")
  }
  init() {
      this.initGradientColors(), this.initMesh(), this.resize(), requestAnimationFrame(this.animate), window.addEventListener("resize", this.resize)
  }
  /*
  * Waiting for the css variables to become available, usually on page load before we can continue.
  * Using default colors assigned below if no variables have been found after maxCssVarRetries
  */
  waitForCssVars() {
      if (this.computedCanvasStyle && -1 !== this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")) this.init(), this.addIsLoadedClass();
      else {
          if (this.cssVarRetries += 1, this.cssVarRetries > this.maxCssVarRetries) {
              return this.sectionColors = [16711680, 16711680, 16711935, 65280, 255],void this.init();
          }
          requestAnimationFrame(() => this.waitForCssVars())
      }
  }
  /*
  * Initializes the four section colors by retrieving them from css variables.
  */
  initGradientColors() {
      this.sectionColors = ["--gradient-color-1", "--gradient-color-2", "--gradient-color-3", "--gradient-color-4"].map(cssPropertyName => {
          let hex = this.computedCanvasStyle.getPropertyValue(cssPropertyName).trim();
          //Check if shorthand hex value was used and double the length so the conversion in normalizeColor will work.
          if (4 === hex.length) {
              const hexTemp = hex.substr(1).split("").map(hexTemp => hexTemp + hexTemp).join("");
              hex = `#${hexTemp}`
          }
          return hex && `0x${hex.substr(1)}`
      }).filter(Boolean).map(normalizeColor)
  }
}




/*
*Finally initializing the Gradient class, assigning a canvas to it and calling Gradient.connect() which initializes everything,
* Use Gradient.pause() and Gradient.play() for controls.
*
* Here are some default property values you can change anytime:
* Amplitude:    Gradient.amp = 0
* Colors:       Gradient.sectionColors (if you change colors, use normalizeColor(#hexValue)) before you assign it.
*
*
* Useful functions
* Gradient.toggleColor(index)
* Gradient.updateFrequency(freq)
*/







// const canvas = document.getElementsByClassName('rainbow');

// for (const [_key, rainbow] of Object.entries(canvas)) {
//   const context = rainbow.getContext('2d');
//   let time = 0;

//   const color = function(x, y, r, g, b) {
//     context.fillStyle = `rgb(${r}, ${g}, ${b})`
//     context.fillRect(x, y, 10, 10);
//   }

//   const R = function(x, y, time) {
//     return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + time)));
//   }

//   const G = function(x, y, time) {
//     return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300)));
//   }

//   const B = function(x, y, time) {
//     return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(time / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
//   }

//   const startAnimation = function() {
//     for (x = 0; x <= 30; x++) {
//       for (y = 0; y <= 30; y++) {
//         color(x, y, R(x, y, time), G(x, y, time), B(x, y, time));
//       }
//     }
//     time = time + 0.050;
//     window.requestAnimationFrame(startAnimation);
//   }

//   startAnimation();
// }
const BASE_URL = "https://devplace-api.herokuapp.com/devplaces-campus-api/";
const token = localStorage.getItem('token')

const getConfig = async (config) => {
  const { headers, ...rest } = config;

  return {
    baseURL: BASE_URL,
    headers: {
      ...headers,
      ...(token && { authorization: `Bearer ${token}` }),
    },
    ...rest,
  };
};

let Store = {
  state: null,
  status: null,
  response: null,
  progress: 0,
}

const execute = async (method, path, body, config) => {
  const { baseURL, ...rest } = config
  const url = `${baseURL}${path}`

  return fetch(url, {
    method,
    body,
    ...rest
  })

  // const xhttp = new XMLHttpRequest();

  // if(headers.length > 0){
  //   for (const header of headers) {
  //     const key = Object.keys(header)[0]
  //     const value = header[key]
  //     xhttp.setRequestHeader(key, value)
  //   }
  // }

  // xhttp.onreadystatechange = async () => {
  //   Store.state = xhttp.readyState
  //   Store.status = xhttp.status
  //   Store.response = xhttp.response;
  // }

  // xhttp.addEventListener("progress", (event) => {
  //   if (event.lengthComputable) {
  //     var percentComplete = event.loaded / event.total * 100;
  //   } else {
  //     // Unable to compute progress information since the total size is unknown
  //   }
  // });
  
  // xhttp.addEventListener("load", (event) => {
  //   Store.state = 'load'
  // });
  
  // xhttp.addEventListener("error", (event) => {
  //   Store.state = 'error'
  // });

  // xhttp.addEventListener("abort", (event) => {
  //   Store.state = 'aborted'
  // });

  // xhttp.open(verb, url, true);
  // xhttp.send(body);

  // return xhttp
};

const Get = async ({ url, config = {} }) => {
  const defaultConfig = await getConfig(config);
  return execute("get", url, null, { ...defaultConfig })
};

const Post = async ({ url, body = {}, config = {} }) => {
  const defaultConfig = await getConfig(config);
  return execute("post", url, body, { ...defaultConfig })
};

const Put = async ({ url, body = {}, config = {} }) => {
  const defaultConfig = await getConfig(config);
  return execute("put", url, body, { ...defaultConfig });
};

const Del = async ({ url, config = {} }) => {
  const defaultConfig = await getConfig(config);
  return execute("del", url, null, { ...defaultConfig });
};

const Patch = async ({ url, body = {}, config = {} }) => {
  const defaultConfig = await getConfig(config);
  return execute("patch", url, body, {
    ...defaultConfig,
    ...config,
  });
};


const actions = {
  Get,
  Post,
  Put,
  Patch,
  Del,
  Store,
};

const toggleSidebar = () => {
  const target = document.getElementById("sidebar-navbar");
  const backdrop = document.getElementById("backdrop");

  if(target.classList.contains("showing") || target.classList.contains("show-out")){
    setTimeout(() => {
      backdrop.classList.toggle("show-out");
      target.classList.toggle("show-out");
    }, 500)
  }

  if(target.classList.contains("showing")){
    setTimeout(() => {
      backdrop.classList.toggle("show-in");
      target.classList.toggle("show-in");
    }, 500)
  }else{
    backdrop.classList.toggle("show-in");
    target.classList.toggle("show-in");
  }
  
  target.classList.toggle("showing");
  backdrop.classList.toggle("showing");

  closeAllSubmenues();
};

const toggleSubmenu = (submenuId) => {
  const target = document.getElementById(submenuId);

  if(target.classList.contains("showing") || target.classList.contains("show-out")){
    setTimeout(() => {
      target.classList.toggle("show-out");
    }, 500)
  }

  if(target.classList.contains("showing")){
    setTimeout(() => {
      target.classList.toggle("show-in");
    }, 500)
  }else{
    target.classList.toggle("show-in");
  }
  
  target.classList.toggle("showing");
};

const closeAllSubmenues = () => {
  var submenues = document.getElementsByClassName('submenu');

  for (let i = 0; i < submenues.length; i++) {
    submenues[i].className = 'submenu'
  }
}
const applyForm = document.getElementById('apply-form')

if(!!applyForm ){
  const validate = new window.JustValidate("#apply-form");
  
  validate
    .addField("#nombre", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#apellido", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#numero-de-documento", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#email", [
      { rule: "required", errorMessage: "Campo obligatorio" },
      {
        rule: "email",
        errorMessage: "e-Mail invalido",
      },
    ])
    .addField("#pais", [{ rule: "required", errorMessage: "Campo obligatorio" }])
    .addField("#telefono", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#nivel-de-conocimiento", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#otros-conocimientos", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#terminos-y-condiciones", [
      {
        rule: "required",
        errorMessage: "Debes aceptar los terminos y condiciones",
      },
    ])
    .onFail((failedFields) => {
      console.log(failedFields)
      Object.values(failedFields).forEach(failedField => {
        if(!failedField.isValid){
          failedField.elem.parentElement.classList.add('field-error')
        }
      });
    })
    .onSuccess((event) => {
      saveInLocalSoterage('apply-form')
    });
  
}

const bankTransferInformationForm = document.getElementById('bank-transfer-information-form')

if(!!bankTransferInformationForm ){
  const validate = new window.JustValidate("#bank-transfer-information-form");
  
  validate
    .addField("#nombre", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#apellido", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#cuit", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField('#comprobante-de-pago', [
      {
        rule: "required",
        errorMessage: "Campo obligatorio"
      },
      {
        rule: 'minFilesCount',
        value: 1,
        errorMessage: "Carga tu comprobante de pago"
      },
      {
        rule: 'maxFilesCount',
        value: 1,
        errorMessage: "Solo se puede agregar un comprobante de pago"
      },
      {
        rule: 'files',
        value: {
          files: {
            extensions: ['jpeg', 'png', 'pdf'],
            maxSize: 25000,
            minSize: 1000,
            types: ['image/jpeg', 'image/png', 'application/pdf'],
          },
        },
      },
    ])
    .onFail((failedFields) => {
      Object.values(failedFields).forEach(failedField => {
        if(!failedField.isValid){
          failedField.elem.parentElement.classList.add('field-error')
        }
      });
    })
    .onSuccess((event) => {
      saveInLocalSoterage('bank-transfer-information-form')
    });

    fillWithLocalStorageInfo('bank-transfer-information-form')
}
const getCart = () => {
  const cartDetails = document.getElementById("cart-details");
  const selectedProduct = localStorage.getItem(
    'selected-product'
  )

  if(cartDetails && !!selectedProduct) {
    const { name, days, period, hours, mentor, price, discount } = JSON.parse(selectedProduct);
  
    document.getElementById('course-name').innerText = name;
    document.getElementById('course-days-period').innerText = days + " " + period;
    document.getElementById('course-hour').innerText = hours;
    document.getElementById('course-teacher').innerText = mentor;
    document.getElementById('course-price').innerText = getPesosArFormat(price);
    document.getElementById('course-discount').innerText = discount + '%';
    document.getElementById('course-total').innerText = getPesosArFormat(price - (price / 100 * discount));
  }
}

const resetCart = () => {
  localStorage.removeItem('selected-product')
  const cartDetails = document.getElementById("cart-details");

  if(cartDetails) {
    document.getElementById('course-name').innerText = '- Seleccione un curso';
    document.getElementById('course-days-period').innerText = '';
    document.getElementById('course-hour').innerText = '';
    document.getElementById('course-teacher').innerText = '';
    document.getElementById('course-price').innerText = '';
    document.getElementById('course-discount').innerText = '0%';
    document.getElementById('course-total').innerText = '';
  }
}

const setSelectedProduct = (data) => {  
  localStorage.setItem(
    'selected-product',
    data
  );

  getCart();
}

const addToCart = (event) => {
  const data = event.target.parentNode.dataset.course
  setSelectedProduct(data)
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = '/checkout/customer-information.php';
  document.body.appendChild(a);
  a.click();
}

getCart()
const contactForm = document.getElementById('contact-form')

if(!!contactForm ){
  const validate = new window.JustValidate("#contact-form");

  validate
  .addField ("#motivo", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#mensaje", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#nombre", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#apellido", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#email", [
    { rule: "required", errorMessage: "Campo obligatorio"},
    {
      rule: "email",
      errorMessage: "e-Mail invalido",
    },
  ])
  .addField ("#pais", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#telefono", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField("#terminos-y-condiciones", [
    {
      rule: "required",
      errorMessage: "Debes aceptar los terminos y condiciones",
    },
  ])
  .onFail((failedFields) => {
    Object.values(failedFields).forEach(failedField => {
      if(!failedField.isValid){
        failedField.elem.parentElement.classList.add('field-error')
      }
    });
  })
  .onSuccess((event) => {
    saveInLocalSoterage('contact-form')
  });
  fillWithLocalStorageInfo('contact-form')
}

const customerInformationForm = document.getElementById('customer-information-form')

if(!!customerInformationForm ){
  const validate = new window.JustValidate("#customer-information-form");
  
  validate
    .addField("#nombre", [
      { rule: "required", errorMessage: "Campo obligatorio"},
    ])
    .addField("#apellido", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#numero-de-documento", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#email", [
      { rule: "required", errorMessage: "Campo obligatorio" },
      {
        rule: "email",
        errorMessage: "e-Mail invalido",
      },
    ])
    .addField("#pais", [{ rule: "required", errorMessage: "Campo obligatorio" }])
    .addField("#telefono", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#terminos-y-condiciones", [
      {
        rule: "required",
        errorMessage: "Debes aceptar los terminos y condiciones",
      },
    ])
    .onFail((failedFields) => {
      Object.values(failedFields).forEach(failedField => {
        if(!failedField.isValid){
          failedField.elem.parentElement.classList.add('field-error')
        }
      });
    })
    .onSuccess((event) => {
      saveInLocalSoterage('customer-information-form')
      let nextStep = event.target.dataset.nextstep
      goToUrl(nextStep, '/checkout')
    });

    fillWithLocalStorageInfo('customer-information-form')
}
const giftCardForm = document.getElementById('gift-card-form')

if(!!giftCardForm ){
  const validate = new window.JustValidate("#gift-card-form");
  
  validate
    .addField("#nombre", [
      { rule: "required", errorMessage: "Campo obligatorio"},
    ])
    .addField("#apellido", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#numero-de-documento", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#email", [
      { rule: "required", errorMessage: "Campo obligatorio" },
      {
        rule: "email",
        errorMessage: "e-Mail invalido",
      },
    ])
    .addField("#pais", [{ rule: "required", errorMessage: "Campo obligatorio" }])
    .addField("#telefono", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#curso", [
      {
        rule: "required",
        errorMessage: "Debes seleccionar una opción",
      },
    ])
    .addField("#lanzamiento", [
      {
        rule: "required",
        errorMessage: "Debes seleccionar una opción",
      },
    ])
    .addField("#receptor-nombre", [
      { rule: "required", errorMessage: "Campo obligatorio"},
    ])
    .addField("#receptor-apellido", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#receptor-email", [
      { rule: "required", errorMessage: "Campo obligatorio" },
      {
        rule: "email",
        errorMessage: "e-Mail invalido",
      },
    ])
    .addField("#fecha-de-entrega", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#terminos-y-condiciones", [
      {
        rule: "required",
        errorMessage: "Debes aceptar los terminos y condiciones",
      },
    ])
    .onFail((failedFields) => {
      Object.values(failedFields).forEach(failedField => {
        if(!failedField.isValid){
          failedField.elem.parentElement.classList.add('field-error')
        }
      });
    })
    .onSuccess((event) => {
      saveInLocalSoterage('gift-card-form')
      let nextStep = event.target.dataset.nextstep
      goToUrl(nextStep, '/checkout')
    });

    fillWithLocalStorageInfo('gift-card-form')
}
const paymentMethodForm = document.getElementById("payment-method-form");

if (!!paymentMethodForm) {
  const validate = new window.JustValidate("#payment-method-form");

  validate
    .addField('[name="payment-method"]', [
      {
        rule: "required",
        errorMessage: "Selecciona una opción",
      },
    ])
    .onFail((failedFields) => {
      console.log("Error", failedFields);
      Object.values(failedFields).forEach((failedField) => {
        if (!failedField.isValid) {
          failedField.elem.parentElement.classList.add("field-error");
        }
      });
    })
    .onSuccess((event) => {
      saveInLocalSoterage("payment-method-form");
      let nextStep = event.target.dataset.nextstep;
      var jsonStr = localStorage.getItem("selected-product");
      var selectedProduct = JSON.parse(jsonStr);

      if (nextStep == "mercado-pago"){
        document.location.href = selectedProduct.paymentLink;
      } else if (nextStep == "whatsapp") {
        document.location.href =
          "https://wa.me/5491121685045?text=Me%20interesa%20pagar%20en%20Ethereum";
      } else {
        goToUrl(nextStep, "/checkout");
      }
    });

  fillWithLocalStorageInfo("payment-method-form");

  const paymentMethods = document.querySelectorAll('[name="payment-method"]');
  let paymentGateway = null;

  for (const paymentMethod of paymentMethods) {
    paymentMethod.addEventListener("change", (event) => {
      if (this !== paymentGateway) {
        paymentGateway = event.target;
      }

      const nextStep = event.target.dataset.gateway;
      paymentMethodForm.dataset.nextstep = nextStep;
    });
  }

  for (const paymentMethod of paymentMethods) {
    if (paymentMethod.checked) {
      const nextStep = paymentMethod.dataset.gateway;
      paymentMethodForm.dataset.nextstep = nextStep;
    }
  }
}

const signinForm = document.getElementById('signin-form')

if(!!signinForm ){
  const validate = new window.JustValidate("#signin-form");

  validate
  .addField ("#email", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#contrasena", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .onFail((failedFields) => {
    console.log('Error', failedFields)
    Object.values(failedFields).forEach(failedField => {
      if(!failedField.isValid){
        failedField.elem.parentElement.classList.add('field-error')
      }
    });
  })
  .onSuccess((event) => {
    console.log('Success', event)
    //saveInLocalSoterage('payment-method-form')
    //let nextStep = event.target.dataset.nextstep
    //goToUrl(nextStep, '/account')
  });

  fillWithLocalStorageInfo('signin-form')
}
const signupForm = document.getElementById('signup-form')

if(!!signupForm ){
  const validate = new window.JustValidate("#signup-form");

  validate
  .addField ("#nombre", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#apellido", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#email", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#telefono", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#contrasena", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField("#terminos-y-condiciones", [
  {
    rule: "required",
    errorMessage: "Debes aceptar los terminos y condiciones",
  }
  ])
  .onFail((failedFields) => {
    console.log('Error', failedFields)
    Object.values(failedFields).forEach(failedField => {
      if(!failedField.isValid){
        failedField.elem.parentElement.classList.add('field-error')
      }
    });
  })
  .onSuccess((event) => {
    console.log('Success', event)
    //saveInLocalSoterage('payment-method-form')
    //let nextStep = event.target.dataset.nextstep
    //goToUrl(nextStep, '/account')
  });

  fillWithLocalStorageInfo('signup-form')
}
const workwithusForm = document.getElementById('work-with-us-form')

if(!!workwithusForm ){
  const validate = new window.JustValidate("#work-with-us-form");

  validate
  .addField ("#nombre", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#apellido", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField("#numero-de-documento", [
    { rule: "required", errorMessage: "Campo obligatorio" },
  ])
  .addField("#email", [
    { rule: "required", errorMessage: "Campo obligatorio" },
    {
      rule: "email",
      errorMessage: "e-Mail invalido",
    },
  ])
  .addField("#pais", [{ rule: "required", errorMessage: "Campo obligatorio" }])
  .addField("#telefono", [
    { rule: "required", errorMessage: "Campo obligatorio" },
  ])
  .addField("#puesto", [
    { rule: "required", errorMessage: "Debes seleccionar una opción" },
  ])
  .addField('#adjuntar-cv',[
    {
      rule: "required",
      errorMessage: "Campo obligatorio"
    },
    {
      rule: 'minFilesCount',
      value: 1,
      errorMessage: "Carga tu CV"
    },
    {
      rule: 'maxFilesCount',
      value: 1,
      errorMessage: "Solo se puede agregar un CV"
    },
    {
      rule: 'files',
      value: {
        files: {
          extensions: ['jpeg', 'png', 'pdf'],
          maxSize: 25000,
          minSize: 1000,
          types: ['image/jpeg', 'image/png', 'application/pdf'],
        },
      },
    },
  ])
  .addField("#terminos-y-condiciones", [
    {
      rule: "required",
      errorMessage: "Debes aceptar los terminos y condiciones",
    },
  ])
  .onFail((failedFields) => {
    Object.values(failedFields).forEach(failedField => {
      if(!failedField.isValid){
        failedField.elem.parentElement.classList.add('field-error')
      }
    });
  })
  .onSuccess((event) => {
    saveInLocalSoterage('work-with-us-form')
  });
  fillWithLocalStorageInfo('work-with-us-form')
}
const goToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/**
 * Init front end routing
 */
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      closeAllSubmenues()
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const initRainbows = () => {
  const rainbows = document.getElementsByClassName("rainbow-hero");
  
  for (let i = 0; i < rainbows.length; i++) {
    const gradient = new Gradient();
    rainbows[i].id = "rainbow-hero-" + i;
  
    gradient.initGradient("#rainbow-hero-" + i);
  }
}

const init = () => {
  /**
   * Init Acordeon
   */
  const cartDetails = document.getElementById("cart-details");
  const cartDetailsToggle = document.getElementById("cart-details-toggle")

  if(!!cartDetailsToggle && !!cartDetails){
    cartDetailsToggle.addEventListener("click", () => {
      cartDetails.classList.toggle('closed')
    });
  }

  /**
   * Init Acordeon
   */
  
  const acordeonItems = document.getElementsByClassName("acordeon-item");
  
  if(acordeonItems.length > 0){
    acordeonItems[0].classList.add('opened');
    
    const acordeonItemHandler = (event) => {
      //let founded = false;
      event.currentTarget.classList.toggle("opened");
      // for (const acordeonItem of acordeonItems) {
      //   if(acordeonItem.classList.contains('opened') && !founded){
      //     acordeonItem.classList.remove("opened");
      //     return
      //   }
      // }
    };
  
    for (const acordeonItem of acordeonItems) {
      acordeonItem.addEventListener("click", acordeonItemHandler);
    }
  }

  /**
   * Init Carousel
   */

  initCarousel();

  /**
   * Init Stripe Gradient Animation
   */

  initRainbows();

  /**
   * Listen Scroll to show Menu Dark Mode
   */
  window.addEventListener("scroll", function () {
    menuDarkMode();
  });

  /**
   * Init front end routing
   */
  menuDarkMode();
  getMenuItems();
  getSidebarMenuWithSubmenu();

  /**
   * Execute Markdown
   */
  const markdowns = document.getElementsByClassName("markdown");

  for (const [_key, text] of Object.entries(markdowns)) {
    const input = text;
    const output = text;
    output.innerHTML = markdownTranspiler(input.innerText);
  }

  /**
   * Modals
   */
  initModals();
};

init();
