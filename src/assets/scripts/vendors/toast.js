const showToast = (type, innerHTML) => {
  const toast = document.createElement('div');
  toast.innerHTML = '<span class="tick"></span><span class="message">' + innerHTML + '</span>';
  toast.classList.add('toast')
  toast.classList.add('toast-' + type)
  toast.id='toast'

  document.body.appendChild(toast)
  
  
  // Add the "show" class to toast
  setTimeout(() => {
    document.getElementById('toast').classList.add("show");
    document.getElementById('backdrop').classList.add("show-in")
    document.getElementById('backdrop').classList.add("showing")
  }, 750);

  // After 5 seconds, remove the show class from DIV
  setTimeout(() => {
    document.getElementById('toast').classList.remove("show");
    
    setTimeout(() => {
      document.getElementById('backdrop').classList.remove("show-in")
      document.getElementById('backdrop').classList.remove("showing")
    }, 500);
    
    setTimeout(() => {
      document.getElementById('toast').remove()
    }, 1000);
  }, 3000);
};

