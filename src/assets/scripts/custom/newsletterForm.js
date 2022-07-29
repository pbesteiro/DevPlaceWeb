const desktopNewsletterForm = document.getElementById('desktop-newsletter-form')

if(!!desktopNewsletterForm ){
  const validate = new window.JustValidate("#desktop-newsletter-form");
  
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
      saveInLocalSoterage('desktop-newsletter-form')
      
      const formData = new FormData(event.target)

      sendEmail('newsletter', event.target, formData, () => {
        showToast('success', 'Recibimos tu e-mail correctamente.')
      })
    });
  
}

const mobileNewsletterForm = document.getElementById('mobile-newsletter-form')

if(!!mobileNewsletterForm ){
  const validate = new window.JustValidate("#mobile-newsletter-form");
  
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
      saveInLocalSoterage('mobile-newsletter-form')
      
      const formData = new FormData(event.target)

      sendEmail('newsletter', event.target, formData, () => {
        showToast('success', 'Recibimos tu e-mail correctamente.')
      })
    });
  
}
