<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

$file = file_get_contents($srcPath . "constants/countries.json");
$countries = json_decode($file);
?>

<div class="bank-transfer-information-component">
  <form id="bank-transfer-information-form">
    <h3 class="title"> Ingresa los datos del que transfiere para chequear el pago:</h3>

    <div class="field">
      <label for="cuit">Cuil/Cuit</label>
      <input type="text" name="documento" id="documento">
    </div>

    <div class="field">
      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre">
    </div>

    <div class="field">
      <label for="apellido">Apellido</label>
      <input type="text" name="apellido" id="apellido">
    </div>

    <div class="field">
      <label>Comprobante de pago</label>
      <div id="dropzone">
        <input type="file" name="comprobante-de-pago" id="comprobante-de-pago">
        <label for="comprobante-de-pago" class="label">
          <img src="/dist/images/payment/dropzone-colored-cloud.webp" alt="">
          Arrastrá y soltá el archivo
          <span>ó adjuntá desde el ordenador</span>
        </label>
        <button onclick="removeAllFiles()" class="dz-delete-image">
          <img src="/dist/images/icons/delete-img.svg" alt="X" width="30px" height="30px">
        </button>
      </div>
    </div>
  </form>

  <div class="form-actions">
    <a href="/checkout/<?php echo $prevStep; ?>" class="call-to-action skin-outline">
      Volver
    </a>

    <button type='submit' form="bank-transfer-information-form" id="send-form" class="call-to-action skin-filled">
      Reservar cupo
    </button>
  </div>
</div>