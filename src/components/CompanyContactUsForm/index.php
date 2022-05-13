<?php
$file = file_get_contents($srcPath . "constants/countries.json");
$countries = json_decode($file);
?>

<div class="modal" tabindex="-1" id="company-contact-us-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" onclick="hideModal('company-contact-us-modal')"></button>
      </div>

      <div class="modal-body">
        <form action="" id="company-contact-us-form">

          <div class="field">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre">
          </div>

          <div class="field">
            <label for="apellido">Apellido</label>
            <input type="text" name="apellido" id="apellido">
          </div>

          <div class="field">
            <label for="email">e-Mail</label>
            <input type="email" name="email" id="email">
          </div>

          <div class="fields-inline">
            <div class="field country-field">
              <label for="pais">País</label>

              <div class="select">
                <select name="pais" id="pais">
                  <?php foreach ($countries as $country) { ?>
                    <option value="<?php echo $country->code; ?>" data-dialcode="<?php echo $country->dialCode; ?>">
                      <?php echo $country->flagIcon . ' ' . $country->code; ?>
                    </option>
                  <?php }
                  unset($section) ?>
                </select>
              </div>
            </div>

            <div class="field phone-field">
              <label for="telefono">Teléfono</label>
              <input type="number" name="telefono" id="telefono" placeholder="11 49173181">
              <span id="country-code">+54</span>
              <span class="helper-text">Ingrese el código de área</span>
            </div>
          </div>

          <div class="field">
            <label for="empresa">Empresa</label>
            <input type="text" name="empresa" id="empresa">
          </div>

          <div class="field">
            <label for="puesto">Puesto</label>
            <input type="text" name="puesto" id="puesto">
          </div>

          <div class="field">
            <label for="que-necesita">Explicanos que necesitas</label>
            <textarea name="que-necesita" id="que-necesita" cols="30" rows="10"></textarea>
          </div>

          <div class="wrapper">
            <button type='submit' form="company-contact-us-form" class="call-to-action skin-filled" id="send-form">
              Enviar
            </button>
          </div>
        </form>
      </div>

      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>