<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
include $srcPath . "helpers/slugify.php";
include $srcPath . "helpers/include_with_variables.php";

$file = file_get_contents($srcPath . "constants/site.json");
$site = json_decode($file);

$file = file_get_contents($srcPath . "constants/checkout/" . $page . ".json");
$page = json_decode($file);
?>

<!doctype html>
<html lang="<?php echo $site->language; ?>">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta property="og:title" content="<?php echo $page->title; ?>" />
  <meta property="og:site_name" content="<?php echo $site->name; ?>" />
  <meta name="description" content="<?php echo $page->description; ?>">
  <meta name="description" property="og:description" content="<?php echo $page->description; ?>" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="<?php echo $page->thumbnail; ?>" />
  <meta property="og:url" content="<?php echo $site->base_url; ?>" />
  <meta property="og:locale" content="<?php echo $site->language; ?>" />
  <link rel="apple-touch-icon" sizes="180x180" href="/dist/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/dist/images/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/dist/images/favicon/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <title><?php echo $site->name; ?> | <?php echo $page->title; ?></title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.34/moment-timezone-with-data.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css" type="text/css" />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
  <link href="/dist/styles.css?cb=<?php echo date('h:i:s'); ?>" rel="stylesheet">
</head>

<body class="checkout-layout">
  <header>
    <span class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.63 81.48">
        <g id="Capa_2" data-name="Capa 2">
          <g id="logo_definitivo" data-name="logo definitivo">
            <path class="cls-1" d="M222.18,81.18V65.93h-6V63.36h14.88v2.57h-6V81.18Z" />
            <path class="cls-1" d="M235.35,81.18V63.36h11.72v2.57h-8.86v4.56h6.67V73h-6.67v5.65h9.19v2.56Z" />
            <path class="cls-1" d="M250.85,72.27a8.53,8.53,0,0,1,2.73-6.53,9.53,9.53,0,0,1,11.09-1.57,8.38,8.38,0,0,1,3.19,3l-2.16,1.59a6.44,6.44,0,0,0-10-1.2,6.95,6.95,0,0,0,0,9.42,6.44,6.44,0,0,0,10-1.2l2.16,1.59a8.13,8.13,0,0,1-3.17,3,9.19,9.19,0,0,1-4.47,1.1,9,9,0,0,1-6.64-2.68A8.52,8.52,0,0,1,250.85,72.27Z" />
            <path class="cls-1" d="M272.91,81.18V63.36h2.86v7.1h9v-7.1h2.87V81.18h-2.87V73h-9v8.15Z" />
            <path class="cls-1" d="M313.52,81.18l-1.27-3h-8l-1.27,3h-3l7.86-18.12h1l7.86,18.12Zm-2.3-5.43-3-7.37-3,7.37Z" />
            <path class="cls-1" d="M319.54,72.27a8.46,8.46,0,0,1,2.73-6.53,9.53,9.53,0,0,1,11.09-1.57,8.45,8.45,0,0,1,3.19,3l-2.16,1.59a6.45,6.45,0,0,0-10.05-1.2,7,7,0,0,0,0,9.42,6.45,6.45,0,0,0,10.05-1.2l2.16,1.59a8.19,8.19,0,0,1-3.17,3,9.25,9.25,0,0,1-4.47,1.1,9,9,0,0,1-6.64-2.68A8.45,8.45,0,0,1,319.54,72.27Z" />
            <path class="cls-1" d="M353.29,81.18l-1.27-3h-8l-1.27,3h-3.05l7.86-18.12h1l7.86,18.12ZM351,75.75l-3-7.37-3,7.37Z" />
            <path class="cls-1" d="M360.82,81.18V63.36h5.59a10,10,0,0,1,7,2.46,9.05,9.05,0,0,1,0,12.85,9.87,9.87,0,0,1-7,2.51Zm2.86-2.56h2.7a6.82,6.82,0,0,0,4.93-1.77,6.11,6.11,0,0,0,1.85-4.61,5.94,5.94,0,0,0-1.84-4.57A6.91,6.91,0,0,0,366.38,66h-2.7Z" />
            <path class="cls-1" d="M381.12,81.18V63.36h11.72v2.57H384v4.56h6.67V73H384v5.65h9.18v2.56Z" />
            <path class="cls-1" d="M414.06,63.06h1V81.18h-2.87V70l-5.1,6.7h-1L401,70v11.2h-2.86V63.06h1l7.48,10Z" />
            <path class="cls-1" d="M434.85,63.36,428.7,74v7.18h-2.86V74l-6.16-10.64h3.19l4.4,7.75,4.43-7.75Z" />
            <path class="cls-1" d="M57.9,5.84a7.91,7.91,0,0,0,5.84,2.38H92.61a8,8,0,0,0,5.78-2.38A7.81,7.81,0,0,0,100.83,0H55.52A8.08,8.08,0,0,0,57.9,5.84Z" />
            <path class="cls-1" d="M57.9,38.71a7.91,7.91,0,0,0,5.84,2.38H92.61a8,8,0,0,0,5.78-2.38,7.81,7.81,0,0,0,2.44-5.84H55.52A8.08,8.08,0,0,0,57.9,38.71Z" />
            <path class="cls-1" d="M57.9,22.28a7.94,7.94,0,0,0,5.84,2.37H92.61a8,8,0,0,0,5.78-2.37,7.83,7.83,0,0,0,2.44-5.84H55.52A8.11,8.11,0,0,0,57.9,22.28Z" />
            <path class="cls-1" d="M176.23,8.22h37.09v4.11a4,4,0,0,1-1.22,2.95,4.08,4.08,0,0,1-2.89,1.16h-33V41.09h8.21V24.65h28.88a8,8,0,0,0,5.77-2.37,7.83,7.83,0,0,0,2.44-5.84V0h-45.3Z" />
            <path class="cls-1" d="M240,0h-8.22V41.09h33.09a8,8,0,0,0,5.78-2.38,7.85,7.85,0,0,0,2.44-5.84H240Z" />
            <path class="cls-1" d="M283.65,5.84a7.91,7.91,0,0,0,5.84,2.38h28.87a8,8,0,0,0,5.78-2.38A7.81,7.81,0,0,0,326.58,0H281.27A8.08,8.08,0,0,0,283.65,5.84Z" />
            <polygon class="cls-1" points="281.27 41.09 289.49 41.09 289.49 24.65 318.36 24.65 318.36 41.09 326.58 41.09 326.58 16.44 281.27 16.44 281.27 41.09" />
            <path class="cls-1" d="M336.8,8.22h37.09a8,8,0,0,0,5.78-2.38A7.85,7.85,0,0,0,382.11,0H336.8Z" />
            <path class="cls-1" d="M346.17,31.72a4.15,4.15,0,0,1-1.15-3V16.44H336.8V32.87a8.07,8.07,0,0,0,2.37,5.84A8,8,0,0,0,345,41.09h28.87a8,8,0,0,0,5.78-2.38,7.85,7.85,0,0,0,2.44-5.84h-33A4.14,4.14,0,0,1,346.17,31.72Z" />
            <path class="cls-1" d="M401.54,8.22h28.87a8,8,0,0,0,5.78-2.38A7.81,7.81,0,0,0,438.63,0H393.32a8,8,0,0,0,2.38,5.84A7.91,7.91,0,0,0,401.54,8.22Z" />
            <path class="cls-1" d="M395.7,22.28a7.94,7.94,0,0,0,5.84,2.37h28.87a8,8,0,0,0,5.78-2.37,7.83,7.83,0,0,0,2.44-5.84H393.32A8.07,8.07,0,0,0,395.7,22.28Z" />
            <path class="cls-1" d="M395.7,38.71a7.91,7.91,0,0,0,5.84,2.38h28.87a8,8,0,0,0,5.78-2.38,7.81,7.81,0,0,0,2.44-5.84H393.32A8,8,0,0,0,395.7,38.71Z" />
            <path class="cls-1" d="M37.09,0H0A8,8,0,0,0,2.38,5.84,7.91,7.91,0,0,0,8.22,8.22H33a4,4,0,0,1,4.11,4.1V28.76A4,4,0,0,1,33,32.87H8.22V16.44H0V41.09H37.09a8,8,0,0,0,5.78-2.38,7.85,7.85,0,0,0,2.44-5.84V8.22a7.85,7.85,0,0,0-2.44-5.84A8,8,0,0,0,37.09,0Z" />
            <path class="cls-1" d="M119.27,0a7.85,7.85,0,0,0-5.85,2.44,8,8,0,0,0-2.37,5.78V30.65l8.22-9.5Z" />
            <polygon class="cls-1" points="111.54 41.09 114.26 41.09 122.99 41.09 158.41 0 147.18 0 111.54 41.09" />
          </g>
        </g>
      </svg>
    </span>
  </header>

  <div class="step">
    <div class="container">
      <div class="row">
        <div class="col offset-sm-1">
          PASO <?php echo $page->step; ?> DE 3 <span>|</span> <?php echo $page->title; ?>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-sm-10 offset-sm-1 col-lg-5 order-2 order-sm-2 order-md-2 order-lg-1">
        <?php
        foreach ($page->sections as $section) {
          includeWithVariables($srcPath . 'components/' . $section->component . '/index.php', (array) $section, true);
        }
        unset($section)
        ?>
      </div>

      <div class="col-sm-10 offset-sm-1 offset-lg-0 col-lg-5 order-1 order-sm-1 order-md-1 order-lg-2 d-flex justify-content-end align-items-start">
        <div id="cart-details">
          <div class="shopping-summary">
            <img src="/dist/images/payment/item-list.png" alt="item" width="14px" height="16px" />
            <h3>RESUMEN DE COMPRA <span id="cart-details-toggle"><span class="arrow"></span></span></h3>

          </div>

          <div class="collapsed-section">
            <h2>Curso de <span id="course-name"><span></h2>
            <p>Fecha: <strong id="course-days-period"></strong></p>
            <p>Horario: <strong id="course-hour"></strong></p>
            <p>Profesor: <strong id="course-teacher"></strong></p>

            <hr>

            <div class="text">
              <p>Precio <span id="course-price"></span></p>
              <p>Descuento <span id="course-discount"></span></p>
            </div>
          </div>

          <div class="text">
            <p class="total">Total <span id="course-total"></span></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <?php include $srcPath . 'components/Loader/index.php'; ?>
  <div id="backdrop"></div>
  <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
  <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
  <script src="/dist/scripts.js?cb=<?php echo date('h:i:s'); ?>"></script>
</body>

</html>