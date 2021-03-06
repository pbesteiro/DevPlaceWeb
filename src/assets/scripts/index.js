const goToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const historyBack = () => {
  history.back()
}

const checkoutStepOneBack = (target) => {
  if(!!target){
    const json = JSON.parse(localStorage.getItem(target))
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = json.link;
    document.body.appendChild(a);
    a.click();
  }
}

const getUrlParamByName = (name, url = window.location.href) => {
  const paramName = name.replace(/[[\]]/g, "\\$&");
  const regex = new RegExp(`[?&]${paramName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

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
  document.activeElement.blur()
  
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
