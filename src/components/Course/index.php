<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

$file = file_get_contents($srcPath . "constants/mentors.json");
$mentors = json_decode($file);

$file = file_get_contents($srcPath . "constants/what-students-say.json");
$students = json_decode($file);
?>

<section class="course-component" id="course-component">
  <!-- Encabezado -->
  <div class="hero">
    <?php include $srcPath . 'components/Rainbow/index.php'; ?>
    <img src="/dist/images/courses/<?php echo $image; ?>" alt="<?php echo $name; ?>">
  </div>

  <h3 class="modality">
    <?php echo $modality; ?>
  </h3>

  <h1 class="name">
    <?php echo $name; ?>
  </h1>

  <?php if (isset($program)) { ?>
    <div class="content-center">
      <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $program, true); ?>
    </div>
  <?php } ?>

  <?php if (isset($details)) { ?>
    <div class="details">
      <?php foreach ($details as $detail) { ?>
        <div class="detail">
          <img src="/dist/images/icons/<?php echo $detail->image; ?>" alt="">
          <?php echo $detail->description; ?>
        </div>
      <?php } ?>
    </div>
  <?php } ?>

  <?php if (isset($cta)) { ?>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="content-center">
            <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
          </div>
        </div>
      </div>
    </div>
  <?php } ?>

  <!-- Clases online en vivo  -->
  <div class="in-columns">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="columns align-center">
            <div class="final-project">
              <h2 class="title align-left margin-bottom-20">Clases online en vivo con profesionales de la industria</h2>
              <p class="text size-2" style="line-height: 26px;">Interactúa online y en vivo con el profesor/a experto en la materia, aprendiendo directamente de el/ella y haciendo las preguntas sin intermediarios y chatea con tus compañeros/as mientras se dicta la clase.</p>
            </div>

            <div class="certification" style="max-width: 550px;">
              <img src="/dist/images/live-classes.svg" alt="Certificado" width="100%" height="auto">
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php if (isset($cta)) { ?>
      <div class="container m-t-100">
        <div class="row">
          <div class="col">
            <div class="content-center">
              <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>

  <!-- Centro de contenidos  -->
  <div class="in-columns gray-box">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="columns align-center">
            <div class="certification" style="max-width: 550px;">
              <img src="/dist/images/content-center.svg" alt="Certificado" width="100%" height="auto">
            </div>

            <div class="final-project">
              <h2 class="title align-left margin-bottom-20">Centro de contenidos exclusivo de nuestra plataforma</h2>
              <p class="text size-2" style="line-height: 26px;">Documentación, ejercicios y videos explicativos exclusivos de tu curso. <br /> Accede a las clases grabadas por si quieres hacer el curso a tu ritmo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php if (isset($cta)) { ?>
      <div class="container m-t-100">
        <div class="row">
          <div class="col">
            <div class="content-center">
              <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>

  <!-- Panel del usuario -->
  <div class="in-columns">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="columns align-center">
            <div class="final-project">
              <h2 class="title align-left margin-bottom-20">Panel del Usuario</h2>
              <p class="text size-2" style="line-height: 26px;">
                Panel general para administrar los cursos que hayas realizado, unirte a las clases online en vivo de los cursos que estés realizando.<br />
                Puedes administrar tu curso, a tu manera y también podrás personalizar tu perfil.
              </p>
            </div>

            <div class="certification" style="max-width: 550px;">
              <img src="/dist/images/user-screen.svg" alt="Certificado" width="100%" height="auto">
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php if (isset($cta)) { ?>
      <div class="container m-t-100">
        <div class="row">
          <div class="col">
            <div class="content-center">
              <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>

  <!-- Chat -->
  <div class="in-columns gray-box">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="columns align-center">
            <div class="certification" style="max-width: 550px;">
              <img src="/dist/images/network.svg" alt="Certificado" width="100%" height="auto">
            </div>

            <div class="final-project">
              <h2 class="title align-left margin-bottom-20">Network</h2>
              <p class="text size-2" style="line-height: 26px;">Conversa en vivo con tu grupo y tu mentor/a 24/7, con la comunidad que realizó los mismos cursos y con todo el ecosistema Dev. Accede a canales de conversación de los temas de vanguardia de la industria tecnológica que reúnen a las personas y a la información adecuadas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php if (isset($cta)) { ?>
      <div class="container m-t-100">
        <div class="row">
          <div class="col">
            <div class="content-center">
              <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>

  <!-- Calendario -->
  <div class="in-columns">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="columns align-center">
            <div class="final-project">
              <h2 class="title align-left margin-bottom-20">Calendario</h2>
              <p class="text size-2" style="line-height: 26px;">
                Organiza las fechas de tu curso y mira los próximos temas de las clases.<br />
                Además, podrás ver las próximas fechas de eventos y talleres gratuitos de crecimiento profesional.<br />
                Recibe notificaciones sobre todos los eventos en los que te encuentres inscripto.
              </p>
            </div>

            <div class="certification" style="max-width: 550px;">
              <img src="/dist/images/user-screen.svg" alt="Certificado" width="100%" height="auto">
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php if (isset($cta)) { ?>
      <div class="container m-t-100">
        <div class="row">
          <div class="col">
            <div class="content-center">
              <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>

  <!-- Principal Información sobre tu curso -->
  <!-- Objetivos de aprendizaje -->
  <!-- A quien va dirigido? -->
  <!-- Perfil del Egresado -->
  <div class="in-columns">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="align-center">Principal Información sobre tu curso</h2>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="columns align-top">
            <div class="objectives">
              <h3 class="title">Objetivos de aprendizaje</h3>
              <p class="markdown text"><?php echo $objectives; ?></p>
            </div>

            <div class="for-whom">
              <h3 class="title">¿A quién va dirigido?</h3>
              <p class="markdown text"><?php echo $forWhom; ?></p>
            </div>

            <div class="profile">
              <h3 class="title">Perfil del egresado</h3>
              <p class="markdown text"><?php echo $profile; ?></p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <?php if (isset($cta)) { ?>
      <div class="container m-t-100">
        <div class="row">
          <div class="col">
            <div class="content-center">
              <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>

  <!-- Herramientas -->
  <?php includeWithVariables($srcPath . 'components/' . $tools->component . '/index.php', (array) $tools, true);
  ?>

  <!-- Proyecto final + Certificación -->
  <div class="in-columns">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="columns align-center">
            <div class="final-project">
              <h2 class="title align-left margin-bottom-20">Proyecto final + certificación</h2>
              <p class="markdown text size-2"><?php echo $finalProject; ?></p>
            </div>

            <div class="certification" style="max-width: 550px;">
              <img src="/dist/images/certification.png" alt="Certificado" width="100%" height="auto">
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php if (isset($cta)) { ?>
      <div class="container m-t-100">
        <div class="row">
          <div class="col">
            <div class="content-center">
              <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>

  <!-- Equipo -->
  <div class="mentors-carousel">
    <?php includeWithVariables($srcPath . 'components/Carousel/index.php', (array) $mentors, true); ?>
  </div>

  <!-- Estadísticos -->
  <div class="in-columns">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="columns align-top">
            <div class="objectives">
              <h2 class="gradient-title">+80</h2>
              <p class="text size-2">Cursos online en vivo brindados en habilidades digitales</p>
            </div>

            <div class="for-whom">
              <h2 class="gradient-title">+5000</h2>
              <p class="text size-2">Horas de contenido entre clases online en vivo y contenido on demand</p>
            </div>

            <div class="profile">
              <h2 class="gradient-title">100%</h2>
              <p class="text size-2">De las personas que completaron al menos 1 curso admiten haber progresado en su carrera profesional gracias a las habilidades digitales incorporadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php if (isset($cta)) { ?>
      <div class="container m-t-100">
        <div class="row">
          <div class="col">
            <div class="content-center">
              <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>

  <!-- Formas de Pago -->
  <div class="payment-menthods gray-box">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="align-center" style="margin-bottom: 30px;">Formas de pago</h2>
          <p class="text align-center" style="line-height: 26px; margin: 0px auto 65px; max-width: 700px">Paga con tarjeta de crédito hasta 12 cuotas sin interés, tarjeta de debito, transferencia bancaria, deposito bancario, Mercado Pago, Ualá, Ethereum o efectivo a través de Rapipago o Pago Fácil. </p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <ul class="payment-method-list">
            <li><span><img src="/dist/images/course-payment-methods/mercado-pago.png" alt="Picture"></span></li>
            <li><span><img src="/dist/images/course-payment-methods/mastercard.png" alt="Picture"></span></li>
            <li><span><img src="/dist/images/course-payment-methods/visa.png" alt="Picture"></span></li>
            <li><span><img src="/dist/images/course-payment-methods/uala.png" alt="Picture"></span></li>
          </ul>

          <ul class="payment-method-list">
            <li><span><img src="/dist/images/course-payment-methods/ethereum.png" alt="Picture"></span></li>
            <li><span><img src="/dist/images/course-payment-methods/american-express.png" alt="Picture"></span></li>
            <li><span><img src="/dist/images/course-payment-methods/pago-facil.png" alt="Picture"></span></li>
            <li><span><img src="/dist/images/course-payment-methods/bank-transfer.png" alt="Picture"></span></li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="notes text-center">*¡Conoce otras tarjetas y métodos de pago que aceptamos en la sección de preguntas frecuentes!</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Inscripcion -->
  <div class="inscription">
    <div class="in-columns">
      <div class="container">
        <div class="row">
          <div class="col align-center">
            <h2 class="text-center">Inscripción</h2>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="columns align-top">
              <div>
                <h3 class="title">Pago</h3>
                <p>Una vez abonado el curso, te va a llegar un mail con:</p>
                <br>
                <ul class="list">
                  <li>
                    <span><img src="/dist/images/icons/bullet.png" alt="icon"></span>
                    <p>Acceso a nuestra plataforma.</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/bullet.png" alt="icon"></span>
                    <p>Acceso al sistema de chat de todo el ecosistema.</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/bullet.png" alt="icon"></span>
                    <p>Acceso a los links de las clases online en vivo.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="title">Lo que recibes</h3>
                <ul class="list">
                  <li>
                    <span><img src="/dist/images/icons/notebook.png" alt="icon"></span>
                    <p>Clases online en vivo con profesor/a en horarios determinados.</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/documentation.png" alt="icon"></span>
                    <p>Documentación y contenido exclusivo.</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/foro.png" alt="icon"></span>
                    <p>Acceso al foro privado de tu curso.</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/support.png" alt="icon"></span>
                    <p>Soporte y seguimiento las 24hs.</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/extra-material.png" alt="icon"></span>
                    <p>Videos extra grabados.</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/recorded-classes.png" alt="icon"></span>
                    <p>Clases grabadas y publicadas en la plataforma.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="title">¿Por qué inscribirme en un curso de Dev Place?</h3>
                <ul class="list">
                  <li>
                    <span><img src="/dist/images/icons/bullet.png" alt="icon"></span>
                    <p>Becas por buen rendimiento del 100% para próximos cursos</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/bullet.png" alt="icon"></span>
                    <p>Talleres para crecimiento profesional.</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/bullet.png" alt="icon"></span>
                    <p>Certificado al aprobar proyecto final.</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/bullet.png" alt="icon"></span>
                    <p>Descuentos para futuros cursos.</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/bullet.png" alt="icon"></span>
                    <p>Descuentos para futuros cursos usando el programa de referidos meetups y conferencias exclusivas del ecosistema con lideres #tech.</p>
                  </li>
                  <li>
                    <span><img src="/dist/images/icons/bullet.png" alt="icon"></span>
                    <p>Acceso a los links de las clases online en vivo.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <?php if (isset($cta)) { ?>
    <div class="container m-t-100">
      <div class="row">
        <div class="col">
          <div class="content-center">
            <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
          </div>
        </div>
      </div>
    </div>
  <?php } ?>
  </div>

  <!-- Experiencias -->
  <div class="students-carousel gray-box m-t-100">
    <?php includeWithVariables($srcPath . 'components/Carousel/index.php', (array) $students, true); ?>
  </div>

  <!-- Carousel Calendario -->
  <div id="course-calendar-carousel">
    <section class="carousel-component carousel-calendar-skin show-rainbow-desktop show-rainbow-mobile rainbow-mobile-position-top rainbow-desktop-position-center">
      <div class="container">
        <div class="row">
          <div class="col">
            <h3 class="title">Calendario</h3>
          </div>
        </div>
      </div>

      <div class="carousel">
        <div class="rainbow-hero-wrapper isLoaded">
          <canvas class="rainbow-hero isLoaded" width="1680" height="600" id="rainbow-hero-2"></canvas>
        </div>

        <div class="carousel-container">
          <div class="carousel-row">
            <div class="empty-state-slide">
              <div class="content-center">
                <?php include $srcPath . 'components/Loader/index.php'; ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</section>

<style>
  .faqs-component {
    padding: 65px 0;
  }
</style>
<script>
  const TECHNOLOGY_ID = "<?php echo $technologyId; ?>";
  const PAYMENT_LINK = "<?php echo $paymentLink; ?>";
  const LINK = "<?php echo $link; ?>";

  const getPeriod = (start, end) => {
    const dateStart = dateSpliter(setToLocalTimeZone(start));
    const dateEnd = dateSpliter(setToLocalTimeZone(end));

    const dateStartString = `${dateStart.day.number}/${dateStart.month.number}`;
    const dateEndString = `${dateEnd.day.number}/${dateEnd.month.number}`;

    return `${dateStartString} al ${dateEndString}`;
  };

  document.onreadystatechange = async () => {
    if (document.readyState == "complete") {
      const publications = await Get({
          url: `publications?technology=${TECHNOLOGY_ID}`,
        })
        .then((response) => response.json())
        .then((data) => data);

      let slides = [];

      for (const slide of publications) {
        console.log({
          _id: slide._id,
          component: "SlideCalendar",
          name: slide.name,
          days: slide.days,
          period: getPeriod(slide.dateStart, slide.dateEnd),
          hours: slide.hours,
          modality: "Online en vivo",
          mentor: slide.mentor?.name + ' ' + slide.mentor?.lastName,
          price: slide.price * 2,
          discount_price: slide.price,
          discount: 50,
          duration: slide.duration,
          detail: slide.detail,
          cta: {
            type: "filled",
            action: "addToCart(event)",
            label: "Inscribirme",
          },
          paymentLink: PAYMENT_LINK,
          link: LINK
        })
        slides.push({
          _id: slide._id,
          component: "SlideCalendar",
          name: slide.name,
          days: slide.days,
          period: getPeriod(slide.dateStart, slide.dateEnd),
          hours: slide.hours,
          modality: "Online en vivo",
          mentor: slide.mentor?.name + ' ' + slide.mentor?.lastName,
          price: slide.price * 2,
          discount_price: slide.price,
          discount: 50,
          duration: slide.duration,
          detail: slide.detail,
          cta: {
            type: "filled",
            action: "addToCart(event)",
            label: "Inscribirme",
          },
          paymentLink: PAYMENT_LINK,
          link: LINK
        });
      }

      const calendarCarousel = {
        component: "Carousel",
        options: {
          skin: "calendar",
          showRainbowDesktop: true,
          showRainbowMobile: true,
          rainbowMobilePosition: "top",
          rainbowDesktopPosition: "center",
        },
        title: "Calendario",
        content: slides,
      };

      await Post({
          url: "components/Carousel/fetchCarousel.php",
          body: JSON.stringify(calendarCarousel),
          config: {
            baseURL: "/",
            mode: "same-origin",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
          },
        })
        .then((response) => response.text())
        .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const container = document.getElementById("course-calendar-carousel");
          container.innerHTML = doc.getElementsByTagName("body")[0].innerHTML;

          initRainbows();
          reInit();
        });
    }
  }
</script>

<!-- Preguntas Frecuentes -->