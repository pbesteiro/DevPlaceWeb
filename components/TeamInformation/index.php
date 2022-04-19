<div class="team-information-component
<?php
echo isset($options->skin) && $options->skin ? ' ' . $options->skin : 'short';
?>
">
  <div class="container">
    <div class="row">
      <div class="col-md-10">
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

        <?php if (isset($written) && $written !== '') { ?>
          <p class="markdown written">
            <?php echo $written; ?>
          </p>
        <?php } ?>

        <div class="information">
          <?php foreach ($content as $information) { ?>
            <div class="information-item">
              <h3 class="markdown title">
                <?php echo $information->title; ?>
              </h3>

              <p class="markdown text">
                <?php echo $information->text; ?>
              </p>
            </div>
          <?php } ?>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <?php if (isset($cta)) { ?>
          <div class="content-center">
            <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
          </div>
        <?php } ?>
      </div>
    </div>
  </div>
</div>