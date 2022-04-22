const signinForm = document.getElementById('signin-form')

if(!!signinForm ){
  const validate = new window.JustValidate("#signin-form");

  validate
  .addField ("#email", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#contrasena", [
    { rule: "required", errorMessage: "Campo obligatorio"},
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

  fillWithLocalStorageInfo('signin-form')
}