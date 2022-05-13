const paymentMethodForm = document.getElementById("payment-method-form");

if (!!paymentMethodForm) {
  const validate = new window.JustValidate("#payment-method-form");

  validate
    .addField('[name="payment-method"]', [
      {
        rule: "required",
        errorMessage: "Selecciona una opción",
      },
    ])
    .onFail((failedFields) => {
      Object.values(failedFields).forEach((failedField) => {
        if (!failedField.isValid) {
          failedField.elem.parentElement.classList.add("field-error");
        }
      });
    })
    .onSuccess((event) => {
      saveInLocalSoterage("payment-method-form");
      let nextStep = event.target.dataset.nextstep;
      var jsonStr = localStorage.getItem("selected-product");
      var selectedProduct = JSON.parse(jsonStr);

      if (nextStep == "mercado-pago"){
        document.location.href = selectedProduct.paymentLink;
      } else if (nextStep == "whatsapp") {
        document.location.href =
          "https://wa.me/5491121685045?text=Me%20interesa%20pagar%20en%20Ethereum";
      } else {
        goToUrl(nextStep, "/checkout");
      }
    });

  fillWithLocalStorageInfo("payment-method-form");

  const paymentMethods = document.querySelectorAll('[name="payment-method"]');
  let paymentGateway = null;

  for (const paymentMethod of paymentMethods) {
    paymentMethod.addEventListener("change", (event) => {
      if (this !== paymentGateway) {
        paymentGateway = event.target;
      }

      const nextStep = event.target.dataset.gateway;
      paymentMethodForm.dataset.nextstep = nextStep;
    });
  }

  for (const paymentMethod of paymentMethods) {
    if (paymentMethod.checked) {
      const nextStep = paymentMethod.dataset.gateway;
      paymentMethodForm.dataset.nextstep = nextStep;
    }
  }
}
