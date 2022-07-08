const applyForm = document.getElementById('apply-form')

if(!!applyForm ){
  const validate = new window.JustValidate("#apply-form");
  
  validate
    .addField("#nombre", [
      { rule: "required", errorMessage: "Campo obligatorio" },
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
    .addField("#nivel-de-conocimiento", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#otros-conocimientos", [
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
      saveInLocalSoterage('apply-form')
      const formData = new FormData(event.target)
      const perfil = JSON.parse(localStorage.getItem('selected-bootcamp') || '').profile
      formData.append('perfil', perfil)
      sendEmail('bootcamp', event.target, formData, () => {
        showToast('success', 'Hemos recibido tu solicitud de inscripción al bootcamp de <strong>' + perfil + "</strong>")
        hideModal('apply-modal')
      })
    });
  
}
