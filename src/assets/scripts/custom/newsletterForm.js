const newsletterForm = document.getElementById('newsletter-form')

if(!!newsletterForm ){
  const validate = new window.JustValidate("#newsletter-form");
  
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
      saveInLocalSoterage('newsletter-form')
      
      const formData = new FormData(event.target)

      sendEmail('newsletter', event.target, formData, () => {
        showToast('success', 'Recibimos tu e-mail correctamente.')
      })
    });
  
}
