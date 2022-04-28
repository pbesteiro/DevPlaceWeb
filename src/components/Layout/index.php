<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
include $srcPath . "helpers/slugify.php";
include $srcPath . "helpers/include_with_variables.php";
$file = file_get_contents($srcPath . "constants/site.json");
$site = json_decode($file);
$file = file_get_contents($srcPath . "constants/" . $page . ".json");
$page = json_decode($file);
?>

<!doctype html>
<html lang="<?php echo $site->language; ?>">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta property="og:title" content="<?php echo $page->title; ?>" />
  <meta property="og:site_name" content="<?php echo $site->name; ?>" />
  <meta property="og:description" content="<?php echo $page->description; ?>" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://devplace.tech/dist/images/<?php echo $page->thumbnail; ?>" />
  <meta property="og:url" content="https://devplace.tech/" />
  <meta property="og:locale" content="<?php echo $site->language; ?>" />
  <meta property="fb:app_id" content="401652845152632" />  
  <meta name="facebook-domain-verification" content="zq9951ip9beihqvckaveu9zm1q9p04" />
  <link rel="apple-touch-icon" sizes="180x180" href="/dist/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/dist/images/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/dist/images/favicon/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <title><?php echo $site->name; ?> | <?php echo $page->title; ?></title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
  <link href="/dist/styles.css" rel="stylesheet">
  <link href="../assets/styles/sweetalert.css" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
</head>

<body>
  <a href="https://api.whatsapp.com/send?phone=5491121685045" class="whatsapp" target="_blank">
    <i class="fa fa-whatsapp whatsapp-icon"></i>
  </a>
  <?php includeWithVariables($srcPath . 'components/Header/index.php', (array) $page, true); ?>

  <?php
  foreach ($page->sections as $section) {
    includeWithVariables($srcPath . 'components/' . $section->component . '/index.php', (array) $section, true);
  }
  unset($section)
  ?>

  <?php include $srcPath . 'components/Footer/index.php'; ?>
  <?php include $srcPath . 'components/ApplyForm/index.php'; ?>
  <?php include $srcPath . 'components/Loader/index.php'; ?>
  <div id="backdrop"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.34/moment-timezone-with-data.js"></script>
  <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
  <script src="/dist/scripts.js"></script>
  <script src="../assets/scripts/plugins/sweetalert.min.js"></script>
</body>

</html>