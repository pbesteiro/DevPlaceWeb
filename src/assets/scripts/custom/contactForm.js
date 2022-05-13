const contactForm = document.getElementById('contact-form')

if(!!contactForm ){
  const validate = new window.JustValidate("#contact-form");

  validate
  .addField ("#motivo", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#mensaje", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#nombre", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#apellido", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#email", [
    { rule: "required", errorMessage: "Campo obligatorio"},
    {
      rule: "email",
      errorMessage: "e-Mail invalido",
    },
  ])
  .addField ("#pais", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#telefono", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField("#terminos-y-condiciones", [
    {
      rule: "required",
      errorMessage: "Debes aceptar los terminos y condiciones",
    },
  ])
  .onFail((failedFields) => {
    Object.values(failedFields).forEach(failedField => {
      if(!failedField.isValid){
        failedField.elem.parentElement.classList.add('field-error')
      }
    });
  })
  .onSuccess((event) => {
    saveInLocalSoterage('contact-form')
    const formData = new FormData(event.target)
    sendEmail('contactUs', event.target, formData)
  });
  fillWithLocalStorageInfo('contact-form')
}