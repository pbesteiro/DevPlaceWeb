<form id="signup-form">
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="title">Crear una cuenta</h3>

        <div class="fields">
          <div class="field">
            <label class="label" for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre">
          </div>

          <div class="field">
            <label class="label" for="apellido">Apellido</label>
            <input type="text" name="apellido" id="apellido">
          </div>

          <div class="field">
            <label class="label" for="email">e-Mail</label>
            <input type="text" name="email" id="email">
          </div>

          <div class="field">
            <label class="label" for="telefono">Télefono</label>
            <input type="text" name="telefono" id="telefono">
          </div>

          <div class="field">
            <label class="label" for="contrasena">Contraseña</label>
            <input type="text" name="contrasena" id="contrasena">
          </div>
        </div>

        <div class="field-checkbox">
          <input type="checkbox" name="terminos-y-condiciones" id="terminos-y-condiciones">
          <label for="terminos-y-condiciones">Acepto los <a href="/legal.php">términos y condiciones del servicio</a></label>
        </div>

        <button type='submit' form="signup-form" class="call-to-action skin-filled">
          Crear cuenta
        </button>

        <hr>

        <a href="/sign-in.php" class="call-to-action skin-outline">
          Ingresar
        </a>
      </div>
    </div>
  </div>
</form>