const showToast = (type, innerHTML) => {
  console.log('Toast')
  const toast = document.createElement('div');
  toast.innerHTML = '<span class="tick"></span><span class="message">' + innerHTML + '</span>';
  toast.classList.add('toast')
  toast.classList.add('toast-' + type)
  toast.id='toast'

  document.body.appendChild(toast)
  

  // Add the "show" class to toast
  document.getElementById('toast').classList.add("show");

  // After 5 seconds, remove the show class from DIV
  setTimeout(() => {
    console.log('Hide Toast')
    document.getElementById('toast').classList.remove("show");

    // After 6 seconds, remove toast element
    setTimeout(() => {
      console.log('Remove Toast')
      document.getElementById('toast').remove()
    }, 1000);
  }, 5000);

};
