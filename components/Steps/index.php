<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
$showRainbow = isset($options->showRainbow) && $options->showRainbow
/**
 * 
 *  content: {
 *    title: string,
 *    text: string,
 *  }[]
 * 
 * 
 * 
 */
?>

<section class="steps-component
  <?php echo $showRainbow ? "show-rainbow" : ""; ?>
">
  <?php if ($showRainbow) { ?>
    <?php includeWithVariables($srcPath . 'components/RainbowTitle/index.php', array('title' => $title, 'subtitle' => $subtitle), true); ?>
  <?php } ?>


  <div class="container">
    <?php if (!$showRainbow) { ?>
      <div class="row">
        <div class="col">
          <?php if (isset($title) && $title !== '') { ?>
            <h2 class="markdown title">
              <?php echo $title; ?>
            </h2>
          <?php } ?>

          <?php if (isset($subtitle) && $subtitle !== '') { ?>
            <small class="markdown subtitle">
              <?php echo $subtitle; ?>
            </small>
          <?php } ?>
        </div>
      </div>
    <?php } ?>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <?php foreach ($content as $step) { ?>
          <div class="step">
            <h3 class="title">
              <?php echo $step->title; ?>
            </h3>

            <p class="text">
              <?php echo $step->text; ?>
            </p>

            <div class="arrow">
              <img src="/dist/images/arrow.png" alt="">
            </div>
          </div>
        <?php } ?>
      </div>
    </div>
    <?php if (isset($cta)) { ?>
      <div class="content-center">
        <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
      </div>
    <?php } ?>
  </div>
</section>