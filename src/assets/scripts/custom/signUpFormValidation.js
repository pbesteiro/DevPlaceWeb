const signupForm = document.getElementById('signup-form')

if(!!signupForm ){
  const validate = new window.JustValidate("#signup-form");

  validate
  .addField ("#nombre", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#apellido", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#email", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#telefono", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#contrasena", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField("#terminos-y-condiciones", [
  {
    rule: "required",
    errorMessage: "Debes aceptar los terminos y condiciones",
  }
  ])
  .onFail((failedFields) => {
    console.log('Error', failedFields)
    Object.values(failedFields).forEach(failedField => {
      if(!failedField.isValid){
        failedField.elem.parentElement.classList.add('field-error')
      }
    });
  })
  .onSuccess((event) => {
    console.log('Success', event)
    //saveInLocalSoterage('payment-method-form')
    //let nextStep = event.target.dataset.nextstep
    //goToUrl(nextStep, '/account')
  });

  fillWithLocalStorageInfo('signup-form')
}