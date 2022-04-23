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
    .addField("#documento", [
      { rule: "required", errorMessage: "Campo obligatorio" },
    ])
    /*.addField('#comprobante-de-pago', [
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
      {
        rule: 'files',
        value: {
          files: {
            extensions: ['jpeg', 'png', 'pdf'],
            maxSize: 25000,
            minSize: 1000,
            types: ['image/jpeg', 'image/png', 'application/pdf'],
          },
        },
      },
    ])*/
    .onFail((failedFields) => {
      Object.values(failedFields).forEach(failedField => {
        if(!failedField.isValid){
          failedField.elem.parentElement.classList.add('field-error')
        }
      });
    })
    .onSuccess((event) => {
      saveInLocalSoterage('bank-transfer-information-form')
    });

    fillWithLocalStorageInfo('bank-transfer-information-form')
}