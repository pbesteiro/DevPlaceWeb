<?php
$file = file_get_contents($srcPath . "constants/countries.json");
$countries = json_decode($file);
?>

<div class="modal show-out" tabindex="-1" id="lead-course-program-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" onclick="hideModal('lead-course-program-modal')"></button>
      </div>

      <div class="modal-body">
        <p>Indica tu correo electrónico para continuar con la descarga del programa.</p>

        <form action="" id="lead-course-program-form">
          <div class="field">
            <label for="email">e-Mail</label>
            <input type="email" name="email" id="email">
          </div>

          <div class="wrapper">
            <button type='submit' form="lead-course-program-form" class="call-to-action skin-filled btn-block" id="send-form">
              <span>Enviar</span>
              <?php include $srcPath . 'components/Loader/index.php'; ?>
            </button>
          </div>
        </form>
      </div>

      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>