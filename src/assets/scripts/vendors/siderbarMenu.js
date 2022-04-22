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