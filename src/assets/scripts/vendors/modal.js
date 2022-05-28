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
}

const showModal = (idModal) => {
  const modal = document.getElementById(idModal)
  toggleModal(modal)
}

const showModalWidthData = (idModal) => {
  saveJsonInLocalStorage(idModal, data)
  const modal = document.getElementById(idModal)
  toggleModal(modal)
}

const hideModal = (idModal) => {
  const modal = document.getElementById(idModal)
  toggleModal(modal)
}

const hideAllModals = () => {
  const modals = document.getElementsByClassName('modal')
  const backdrop = document.getElementById("backdrop");

  for(const modal of modals ){
    setTimeout(() => {
      backdrop.classList.toggle("show-out");
      modal.classList.toggle("show-out");
    }, 500)
  }
}

