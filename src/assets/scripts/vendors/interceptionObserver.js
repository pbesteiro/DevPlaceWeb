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
