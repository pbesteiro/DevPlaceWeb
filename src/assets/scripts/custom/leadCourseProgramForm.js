const leadCourseProgramForm = document.getElementById('lead-course-program-form')

if(!!leadCourseProgramForm ){
  const validate = new window.JustValidate("#lead-course-program-form");
  
  validate
    .addField("#email", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .onFail((failedFields) => {
      Object.values(failedFields).forEach(failedField => {
        if(!failedField.isValid){
          failedField.elem.parentElement.classList.add('field-error')
        }
      });
    })
    .onSuccess((event) => {
      saveInLocalSoterage('lead-course-program-form')
     
      const formData = new FormData(event.target)
      const curso = JSON.parse(localStorage.getItem('selected-product') || '')
      formData.append('curseName', curso.name)

      sendEmail('leadCourseProgram', event.target, formData, () => {
        showToast('success', 'Recibimos tu e-mail correctamente.')
        
        const button = document.querySelector('#descargar-programa');
        if(button.dataset.callback && button.dataset.callback !== ''){
          window.open(button.dataset.callback, '_blank').focus();
        }
       
        hideModal('lead-course-program-modal')
      })
    });
  
}
