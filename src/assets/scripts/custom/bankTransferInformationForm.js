const bankTransferInformationForm = document.getElementById('bank-transfer-information-form')

if(!!bankTransferInformationForm ){
  const validate = new window.JustValidate("#bank-transfer-information-form");
  
  validate
    .addField("#nombre", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#apellido", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField("#cuit", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    .addField('#comprobante-de-pago', [
      {
        rule: "required",
        errorMessage: "Campo obligatorio"
      },
      {
        rule: 'minFilesCount',
        value: 1,
        errorMessage: "Carga tu comprobante de pago"
      },
      {
        rule: 'maxFilesCount',
        value: 1,
        errorMessage: "Solo se puede agregar un comprobante de pago"
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
      saveInLocalSoterage('bank-transfer-information-form')
      const formData = new FormData(event.target)
      sendEmail('bankTransfer', event.target, formData)
    });

    fillWithLocalStorageInfo('bank-transfer-information-form')
}
