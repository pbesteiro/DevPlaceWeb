<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
?>

<div class="successful-payment-component">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="ticket">
          <div class="ticket-top">
            <span class="tick"></span>
            <h1>¡Pago Exitoso!</h1>
            <p>Número de transacción: <span id="payment_id"><span></p>
          </div>
          <div class="ticket-bottom">
            <ul>
              <li><strong>Curso: </strong> <strong><span id="curse"></span></strong></li>
              <li><span>Su Pago: </span> <span id="price"></span></li>
            </ul>
          </div>
        </div>

        <div class="content-center">
          <a href="/cursos.php" class="call-to-action skin-filled">
            Ver otros cursos
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  //https://www.devplace.com.ar/successful-payment.php?collection_id=22389955335&collection_status=approved&payment_id=22389955335&status=approved&external_reference=REF_TEST&payment_type=debit_card&merchant_order_id=4762037979&preference_id=807751952-6902d5e7-d1a1-4d36-886c-685faf2939eb&site_id=MLA&processing_mode=aggregator&merchant_account_id=null
  document.onreadystatechange = async () => {
    if (document.readyState == "complete") {
      const payment_id = getUrlParamByName('payment_id')
      const status = getUrlParamByName('status')
      const selectedProductJsonStr = localStorage.getItem('selected-product')
      const benefitedJsonStr = localStorage.getItem('gift-card-form')
      const benefitedEmailSent = localStorage.getItem('benefitedEmailSent')

      document.getElementById('payment_id').innerText = payment_id;

      if (!!selectedProductJsonStr && !!benefitedJsonStr) {
        const selectedProduct = JSON.parse(selectedProductJsonStr)
        const benefited = JSON.parse(benefitedJsonStr)

        const {
          name,
          days,
          period,
          hours,
          mentor,
          price,
          discount_price,
          discount,
        } = selectedProduct;

        document.getElementById('curse').innerText = name;
        document.getElementById('price').innerText = getPesosArFormat(discount_price);

        if (!benefitedEmailSent) {
          const curse = JSON.parse(benefited.filter((field) => field.key === 'lanzamiento')[0].value)
          const formData = new FormData()

          for (const field of benefited) {
            formData.append(field.key, field.value)
          };

          formData.delete('lanzamiento')
          formData.append('cursoName', curse.name)
          formData.append('lanzamiento', `${curse.period}, ${curse.days} de ${curse.hours}`)


          sendEmail('giftCard', null, formData, () => {
            localStorage.setItem('benefitedEmailSent', true)
          })
        }
      }
    }
  }
</script>