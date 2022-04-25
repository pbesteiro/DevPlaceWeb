<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
?>

<section class="course-component" id="course-component">
  <div class="hero">
    <?php include $srcPath . 'components/Rainbow/index.php'; ?>
    <img src="/dist/images/courses/<?php echo $image; ?>" alt="<?php echo $name; ?>">
  </div>

  <h2 class="modality">
    <?php echo $modality; ?>
  </h2>

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
    <div class="content-center">
      <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
    </div>
  <?php } ?>

  <div class="objectives">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">Objetivos de aprendizaje</h2>
          <p class="markdown text"><?php echo $objectives; ?></p>
        </div>
      </div>
    </div>
  </div>

  <div class="for-whom">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">A quién va dirigido?</h2>
          <p class="markdown text"><?php echo $forWhom; ?></p>
        </div>
      </div>
    </div>
  </div>

  <?php if (isset($cta)) { ?>
    <div class="content-center">
      <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
    </div>
  <?php } ?>

  <?php includeWithVariables($srcPath . 'components/' . $tools->component . '/index.php', (array) $tools, true);
  ?>

  <div class="final-project">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">Proyecto final + certificación</h2>
          <p class="markdown text"><?php echo $finalProject; ?></p>
        </div>
      </div>
    </div>
  </div>


  <?php if (isset($cta)) { ?>
    <div class="content-center">
      <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
    </div>
  <?php } ?>

  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">Perfil del egresado</h2>
          <p class="markdown text"><?php echo $profile; ?></p>
        </div>
      </div>
    </div>
  </div>

  <div id="course-calendar-carousel"></div>
</section>

<script>
  const TECHNOLOGY_ID = "<?php echo $technologyId; ?>";
  const PAYMENT_LINK = "<?php echo $paymentLink; ?>";

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
        slides.push({
          _id: slide._id,
          component: "SlideCalendar",
          name: slide.name,
          days: slide.days,
          period: getPeriod(slide.dateStart, slide.dateEnd),
          hours: slide.hours,
          modality: "Online en vivo",
          mentor: slide.mentor?.name + ' ' + slide.mentor?.lastName,
          price: slide.price,
          discount: slide.discount,
          duration: slide.duration,
          detail: slide.detail,
          cta: {
            type: "filled",
            action: "addToCart(event)",
            label: "Inscribirme",
          },
          paymentLink: PAYMENT_LINK,
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