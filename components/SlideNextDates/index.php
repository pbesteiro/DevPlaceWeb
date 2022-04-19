<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
/**
 * 
 * 
 * 
 *  component: string,
 *  title: string,
 *  subtitle: string,
 *  text?: string,
 *  cta?:{
 *    href: string,
 *    label: string
 *  },
 *  image: string
 * }
 * 
 * 
 * 
 */
?>

<div class="slide-component">
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