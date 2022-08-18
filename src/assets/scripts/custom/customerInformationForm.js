const customerInformationForm = document.getElementById('customer-information-form')

if(!!customerInformationForm ){
  const validate = new window.JustValidate("#customer-information-form");
  
  validate
    .addField("#nombre", [
      { rule: "required", errorMessage: "Campo obligatorio"},
    ])
    .addField("#apellido", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#numero-de-documento", [
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
      saveInLocalSoterage('customer-information-form')
      const formData = new FormData(event.target)
      const curso = JSON.parse(localStorage.getItem('selected-product') || '')
      formData.append('curso', curso.name)

      fireTrack(fbTrack.INITIATE_CHECKOUT, curso)

      sendEmail('lead', event.target, formData, () => {
        let nextStep = event.target.dataset.nextstep
        goToUrl(nextStep, '/checkout')
      })
    });

    fillWithLocalStorageInfo('customer-information-form')
}