<?php
$file = file_get_contents($srcPath . "constants/countries.json");
$countries = json_decode($file);
?>

<div class="modal" tabindex="-1" id="apply-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" onclick="hideModal('apply-modal')"></button>
      </div>

      <div class="modal-body">
        <form action="" id="apply-form">
          <div class="field">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre">
          </div>

          <div class="field">
            <label for="apellido">Apellido</label>
            <input type="text" name="apellido" id="apellido">
          </div>

          <div class="field">
            <label for="numero-de-documento">Numero de documento</label>
            <input type="number" name="numero-de-documento" id="numero-de-documento">
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
            <label for="nivel-de-conocimiento">Nivel de conocimiento en programación</label>
            <div class="select">
              <select name="nivel-de-conocimiento" id="nivel-de-conocimiento">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>


          <div class="field">
            <label for="otros-conocimientos">Alguna info más sobre tus conocimientos</label>
            <textarea name="otros-conocimientos" id="otros-conocimientos" cols="30" rows="10"></textarea>
          </div>

          <div class="field-checkbox">
            <input type="checkbox" name="terminos-y-condiciones" id="terminos-y-condiciones">
            <label for="terminos-y-condiciones">Acepto los <a href="/legal.php">términos y condiciones del servicio</a></label>
          </div>

          <div class="wrapper">
            <button type='submit' form="apply-form" class="call-to-action skin-<?php echo isset($type) ? $type : 'filled'; ?>">
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