<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
?>

<section class="faqs-component">
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

        <div class="acordeon preguntas">
          <?php foreach ($content as $pregunta) { ?>
            <div class="acordeon-item pregunta">
              <h3 class="title">
                <?php echo $pregunta->question; ?>
                <span class="arrow"></span>
              </h3>

              <?php if (isset($pregunta->answer) && $pregunta->answer !== "") { ?>
                <div class="collapsed-section">
                  <p class="text">
                    <?php echo $pregunta->answer; ?>
                  </p>
                </div>
              <?php } ?>
            </div>
          <?php } ?>
        </div>

        <hr>
      </div>
    </div>
  </div>
</section>