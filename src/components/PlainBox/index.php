<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
?>


<div class="plain-box-component">
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="markdown title">
          <?php echo $title; ?>
        </h2>


        <div class="col-md-8 offset-md-2 offset-sm-0">
          <p class="text">
            <?php echo $text; ?>
          </p>
        </div>


        <?php if (isset($cta)) { ?>
          <div class="content-center">
            <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
          </div>
        <?php } ?>

      </div>
    </div>
  </div>
</div>