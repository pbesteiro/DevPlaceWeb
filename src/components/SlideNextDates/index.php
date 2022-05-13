<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

$bootcampInformation = array(
  'title' => strip_tags($title),
  'subtitle' => strip_tags($subtitle),
  'duration' => $duration,
  'format' => $format,
  'schedule' => $schedule,
  'profile' => $profile,
);

?>

<div class="slide-component" onclick='saveJsonInLocalStorage("selected-bootcamp", <?php echo "JSON.stringify(" . json_encode($bootcampInformation) . ")" ?>)'>
  <h3 class="title">
    <?php echo $title; ?>
  </h3>

  <?php if (isset($subtitle)) { ?>
    <small class="subtitle">
      <?php echo $subtitle; ?>
    </small>
  <?php } ?>

  <div class="horizontal-division"></div>

  <div class="text">
    <em>Duración</em>
    <strong><?php echo $duration; ?></strong>
  </div>

  <div class="text">
    <em>Formato</em>
    <strong><?php echo $format; ?></strong>
  </div>

  <div class="text">
    <em>Horario</em>
    <strong><?php echo $schedule; ?></strong>
  </div>

  <div class="text">
    <em>Perfil</em>
    <strong><?php echo $profile; ?></strong>
  </div>

  <?php if (isset($cta)) { ?> <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?> <?php } ?>

  <a href="#">Descargar programa</a>
</div>