<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

$file = file_get_contents($srcPath . "constants/countries.json");
$countries = json_decode($file);
?>


<div class="work-with-us-component">
  <div class="container">
    <div class="row">
      <div class="col">

        <form id="work-with-us-form">
          <h2 class="title">Trabaja en Dev Place</h2>

          <div class="field">
            <label class="label" for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre">
          </div>

          <div class="field">
            <label class="label" for="apellido">Apellido</label>
            <input type="text" name="apellido" id="apellido">
          </div>

          <div class="field">
            <label class="label" for="numero-de-documento">N° de Documento</label>
            <input type="text" name="numero-de-documento" id="numero-de-documento">
          </div>

          <div class="field">
            <label class="label" for="email">e-Mail</label>
            <input type="text" name="email" id="email">
          </div>

          <div class="fields-inline">
            <div class="field country-field">
              <label class="label" for="pais">País</label>

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
              <label class="label" for="telefono">Teléfono</label>
              <input type="number" name="telefono" id="telefono" placeholder="11 49173181">
              <span id="country-code">+54</span>
              <span class="helper-text">Ingrese el código de área</span>
            </div>
          </div>

          <div class="field">
            <label class="label" for="puesto">Puesto</label>
            <div class="select">
              <select name="puesto" id="puesto">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label>Adjuntar CV</label>
            <div id="dropzone">
              <input type="file" name="adjuntar-cv" id="adjuntar-cv">
              <label for="adjuntar-cv" class="label">
                <img src="/dist/images/payment/dropzone-colored-cloud.webp" alt="">
                Arrastrá y soltá el archivo
                <span>ó adjuntá desde el ordenador</span>
              </label>
              <button onclick="removeAllFiles()" class="dz-delete-image">
                <img src="/dist/images/icons/delete-img.svg" alt="X" width="30px" height="30px">
              </button>
            </div>
          </div>

          <div class="field">
            <label for="comentario">Comentario</label>
            <textarea name="comentario" id="comentario" cols="30" rows="10"></textarea>
          </div>

          <div class="field-checkbox">
            <input type="checkbox" name="terminos-y-condiciones" id="terminos-y-condiciones">
            <label for="terminos-y-condiciones">Acepto los <a href="/legal.php">términos y condiciones del servicio</a></label>
          </div>
        </form>

        <div class="form-actions">
          <span></span>
          <button type='submit' form="work-with-us-form" class="call-to-action skin-filled">
            Enviar
          </button>
        </div>

      </div>
    </div>
  </div>
</div>