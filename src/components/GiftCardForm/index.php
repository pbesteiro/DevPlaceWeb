<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

$file = file_get_contents($srcPath . "constants/countries.json");
$countries = json_decode($file);

$file = file_get_contents($srcPath . "constants/cursos.json");
$pageCursos = json_decode($file);

$coursesTypes = array_filter($pageCursos->sections, function ($section) {
  return $section->component === 'Carousel';
});

$courses = array_merge(...array_map(function ($course) {
  return $course->content;
}, $coursesTypes));
?>

<div class="gift-card-component" id="gift-card-component">
  <form id="gift-card-form" data-nextstep="<?php echo $nextStep; ?>">
    <div class="field">
      <label class="label" for="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre">
    </div>

    <div class="field">
      <label class="label" for="apellido">Apellido</label>
      <input type="text" name="apellido" id="apellido">
    </div>

    <div class="field">
      <label class="label" for="numero-de-documento">N° de documento</label>
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
      <label class="label" for="curso">Selecciona el curso</label>
      <div class="select">
        <select name="curso" id="curso">
          <?php foreach ($coursesTypes as $courseType) { ?>
            <?php foreach ($courseType->content as $course) { ?>
              <option value="<?php echo $course->technologyId; ?>">
                <?php echo $course->name; ?>
              </option>
          <?php }
          }
          unset($section) ?>
        </select>
      </div>
    </div>

    <div class="field">
      <label class="label" for="lanzamiento">Fecha de lanzamiento</label>
      <div class="select">
        <select name="lanzamiento" id="lanzamiento" disabled>Sin lanzamientos</select>
      </div>
    </div>

    <div class="course-price">
      <h3>Valor del curso:</h3>
      <p>
        <span id="selected-course-price-waiting-state">Seleccione un lanzamiento</span>
        <span id="selected-course-price"></span>
      </p>

    </div>

    <h2 class="title">COMPLETAR LOS DATOS DEL DESTINATARIO</h2>

    <div class="field">
      <label class="label" for="receptor-nombre">Nombre</label>
      <input type="text" name="receptor-nombre" id="receptor-nombre">
    </div>

    <div class="field">
      <label class="label" for="receptor-apellido">Apellido</label>
      <input type="text" name="receptor-apellido" id="receptor-apellido">
    </div>

    <div class="field">
      <label class="label" for="receptor-email">e-Mail</label>
      <input type="text" name="receptor-email" id="receptor-email">
    </div>

    <div class="field">
      <label for="mensaje">Escribe algún mensaje (opcional)</label>
      <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
    </div>

    <div class="field">
      <label class="label" for="fecha-de-entrega">Fecha para enviar la Gift Card</label>
      <input type="date" name="fecha-de-entrega" id="fecha-de-entrega">
    </div>

    <div class="field-checkbox">
      <input type="checkbox" name="terminos-y-condiciones" id="terminos-y-condiciones">
      <label for="terminos-y-condiciones">Acepto los <a href="/legal.php">términos y condiciones del servicio</a></label>
    </div>

    <div class="form-actions">
      <button type="button" onClick="historyBack()" class="call-to-action skin-outline">
        Volver
      </button>

      <button type='submit' form="gift-card-form" class="call-to-action skin-filled">
        <span>Continuar</span>
        <?php include $srcPath . 'components/Loader/index.php'; ?>
      </button>
    </div>
  </form>
</div>

<script>
  document.onreadystatechange = async () => {
    if (document.readyState == "complete") {
      const cursosJSON = <?php echo json_encode($courses); ?>;

      resetCart();

      const courseSelector = document.getElementById("curso");
      const launchSelector = document.getElementById("lanzamiento");
      const selectedCoursePrice = document.getElementById(
        "selected-course-price"
      );
      const selectedCourseWaiting = document.getElementById(
        "selected-course-price-waiting-state"
      );

      const getLaunches = (technologyId) => {
        setEmptyState();

        Get({
            url: `publications?technology=${technologyId}`,
          })
          .then((response) => response.json())
          .then((data) => {
            let launches = [];
            const course = cursosJSON.filter(cursoJson => cursoJson.technologyId === technologyId)[0]
            for (const launch of data) {
              launches.push({
                _id: launch._id,
                name: launch.name,
                days: launch.days,
                period: getPeriod(launch.dateStart, launch.dateEnd),
                hours: launch.hours,
                modality: "Online en vivo",
                mentor: launch.mentor || "Aún no asignado",
                price: launch.price,
                discount: launch.discount || 0,
                duration: launch.duration,
                detail: launch.detail,
                paymentLink: course.paymentLink
              });
            }

            if (launches.length === 1) {
              setSelectedProduct(JSON.stringify(launches[0]));
              setSelectedCoursePrice(launches[0].price);
            }

            getSelctOptions(launches);
          });
      };

      const setEmptyState = () => {
        selectedCourseWaiting.style.display = "inline";
        selectedCoursePrice.innerHTML = "";
        launchSelector.innerHTML = "";

        const option = document.createElement("option");
        option.disabled = true;
        option.selected = true;
        option.value = "";
        option.innerHTML = "Buscando lanzamientos...";
        launchSelector.disabled = true;
        launchSelector.appendChild(option);
      };

      const getPeriod = (start, end) => {
        const dateStart = dateSpliter(setToLocalTimeZone(start));
        const dateEnd = dateSpliter(setToLocalTimeZone(end));
        const dateStartString = `${dateStart.day.number}/${dateStart.month.number}`;
        const dateEndString = `${dateEnd.day.number}/${dateEnd.month.number}`;

        return `${dateStartString} al ${dateEndString}`;
      };

      const getSelctOptions = (launches) => {
        launchSelector.innerHTML = "";

        for (const launch of launches) {
          const option = document.createElement("option");
          option.value = JSON.stringify(launch);
          option.innerHTML = launch.period;
          launchSelector.appendChild(option);
        }

        launchSelector.disabled = false;

        if (launches.length <= 0) {
          const option = document.createElement("option");
          option.disabled = true;
          option.selected = true;
          option.value = "";
          option.innerHTML = "No se encontraron lanzamientos";
          launchSelector.disabled = true;
          launchSelector.appendChild(option);
        }

        launchSelector.disabled = false;
      };

      const setSelectedCoursePrice = (price) => {
        selectedCourseWaiting.style.display = "none";
        selectedCoursePrice.innerHTML = getPesosArFormat(price);
      };

      launchSelector.addEventListener("change", (event) => {
        const data = event.currentTarget.value;
        setSelectedProduct(data);
        setSelectedCoursePrice(JSON.parse(data).price);
      });

      courseSelector.addEventListener("change", (event) => {
        const technologyId = event.currentTarget.value;
        getLaunches(technologyId);
      });

      getLaunches(courseSelector.value);
    }
  }
</script>