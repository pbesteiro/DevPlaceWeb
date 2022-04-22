const giftCardForm = document.getElementById('gift-card-form')

if(!!giftCardForm ){
  const validate = new window.JustValidate("#gift-card-form");
  
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
    .addField("#curso", [
      {
        rule: "required",
        errorMessage: "Debes seleccionar una opción",
      },
    ])
    .addField("#lanzamiento", [
      {
        rule: "required",
        errorMessage: "Debes seleccionar una opción",
      },
    ])
    .addField("#receptor-nombre", [
      { rule: "required", errorMessage: "Campo obligatorio"},
    ])
    .addField("#receptor-apellido", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#receptor-email", [
      { rule: "required", errorMessage: "Campo obligatorio" },
      {
        rule: "email",
        errorMessage: "e-Mail invalido",
      },
    ])
    .addField("#fecha-de-entrega", [
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
      saveInLocalSoterage('gift-card-form')
      let nextStep = event.target.dataset.nextstep
      goToUrl(nextStep, '/checkout')
    });

    fillWithLocalStorageInfo('gift-card-form')
}