const bePartner = document.getElementById('be-partner-form')

if(!!bePartner ){
  const validate = new window.JustValidate("#be-partner-form");
  
  validate
    .addField("#nombre", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#apellido", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#email", [
      { rule: "required", errorMessage: "Campo obligatorio" },
      {
        rule: "email",
        errorMessage: "e-Mail invalido",
      },
    ])
    .addField("#pais", [{ rule: "required", errorMessage: "Campo obligatorio" }])
    .addField("#telefono", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#empresa", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#puesto", [
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
      saveInLocalSoterage('be-partner-form')
      const formData = new FormData(event.target)
      sendEmail('partnership', event.target, formData)
    });
  
}
