<form id="signin-form">

  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="title">Ingresar</h3>

        <div class="fields">
          <div class="field">
            <label class="label" for="email">e-Mail</label>
            <input type="text" name="email" id="email" placeholder="mercedesgorgas@gmail.com">
          </div>

          <div class="field">
            <label class="label" for="contrasena">Contraseña</label>
            <input type="text" name="contrasena" id="contrasena">
          </div>
        </div>

        <button type='submit' form="signin-form" class="call-to-action skin-filled">
          <span>Ingresar</span>
          <?php include $srcPath . 'components/Loader/index.php'; ?>
        </button>

        <div class="get-it-back">
          <a href="#">¿Olvidaste la contraseña?</a>
        </div>

        <hr>

        <a href="/sign-up.php" class="call-to-action skin-outline">
          Crear una cuenta
        </a>
      </div>
    </div>
  </div>
</form>