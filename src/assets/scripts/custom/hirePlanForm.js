const hirePlan = document.getElementById('hire-plan-form')

if(!!hirePlan ){
  const validate = new window.JustValidate("#hire-plan-form");
  
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
      saveInLocalSoterage('hire-plan-form')
      const formData = new FormData(event.target)
      const plan = JSON.parse(localStorage.getItem('selected-plan') || '').name
      formData.append('plan', plan)
      sendEmail('hirePlan', event.target, formData, () => {
        showToast('success', 'Recibimos tu consulta, pronto nos pondremos en contacto contigo.')
        hideModal('hire-plan-modal')
      })
    });
  
}
