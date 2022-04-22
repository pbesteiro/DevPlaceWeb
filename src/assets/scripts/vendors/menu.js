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