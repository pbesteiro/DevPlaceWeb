<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
$file = file_get_contents($srcPath . "constants/countries.json");
$countries = json_decode($file);
?>

<div class="customer-information-component">
  <form id="customer-information-form" data-nextstep="<?php echo $nextStep; ?>">
    <div class="field">
      <label class="label" for="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre">
    </div>

    <div class="field">
      <label class="label" for="apellido">Apellido</label>
      <input type="text" name="apellido" id="apellido">
    </div>

    <div class="field">
      <label class="label" for="numero-de-documento">Numero de documento</label>
      <input type="number" name="numero-de-documento" id="numero-de-documento">
    </div>

    <div class="field">
      <label class="label" for="email">e-Mail</label>
      <input type="email" name="email" id="email">
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

    <div class="field-checkbox">
      <input type="checkbox" name="terminos-y-condiciones" id="terminos-y-condiciones">
      <label for="terminos-y-condiciones">Acepto los <a href="/legal.php">términos y condiciones del servicio</a></label>
    </div>

    <div class="form-actions">
      <button type="button" onClick="historyBack()" class="call-to-action skin-outline">
        Volver
      </button>

      <button type='submit' form="customer-information-form" class="call-to-action skin-filled">
        <span>Continuar</span>
        <?php include $srcPath . 'components/Loader/index.php'; ?>
      </button>
    </div>
  </form>
</div>