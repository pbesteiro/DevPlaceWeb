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
  document.onreadystatechange = async () => {
    if (document.readyState == "complete") {
      const payment_id = getUrlParamByName('payment_id')
      const status = getUrlParamByName('status')
      const selectedProduct = localStorage.getItem(
        'selected-product'
      )
      const benefited = localStorage.getItem(
        'gift-card-form'
      )


      document.getElementById('payment_id').innerText = payment_id;

      if (!!selectedProduct) {
        const {
          name,
          days,
          period,
          hours,
          mentor,
          price,
          discount
        } = JSON.parse(selectedProduct);
        document.getElementById('curse').innerText = name;
        document.getElementById('price').innerText = getPesosArFormat(price);

        const formData = new FormData(event.target)
        sendEmail('benefited', event.target, formData)
      }
    }
  }
</script>