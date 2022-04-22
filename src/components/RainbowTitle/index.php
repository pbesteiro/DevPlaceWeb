<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
?>

<div class="rainbow-title-component">
  <?php include $srcPath . 'components/Rainbow/index.php'; ?>

  <div class="container">
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
  </div>
</div>