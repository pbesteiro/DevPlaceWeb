const workwithusForm = document.getElementById('work-with-us-form')

if(!!workwithusForm ){
  const validate = new window.JustValidate("#work-with-us-form");

  validate
  .addField ("#nombre", [
    { rule: "required", errorMessage: "Campo obligatorio"},
  ])
  .addField ("#apellido", [
    { rule: "required", errorMessage: "Campo obligatorio"},
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
  .addField("#puesto", [
    { rule: "required", errorMessage: "Debes seleccionar una opción" },
  ])
  .addField('#curriculum',[
    {
      rule: "required",
      errorMessage: "Campo obligatorio"
    },
    {
      rule: 'minFilesCount',
      value: 1,
      errorMessage: "Carga tu CV"
    },
    {
      rule: 'maxFilesCount',
      value: 1,
      errorMessage: "Solo se puede agregar un CV"
    }
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
    saveInLocalSoterage('work-with-us-form')
    const formData = new FormData(event.target)
    sendEmail('workWithUs', event.target, formData)
  });
  fillWithLocalStorageInfo('work-with-us-form')
}