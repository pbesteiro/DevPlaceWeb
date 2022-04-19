<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
?>

<section class="calendar-component" <?php echo isset($section_id) && $section_id !== "" ? 'id="' . $section_id . '"' : ''; ?>>
  <?php includeWithVariables($srcPath . 'components/RainbowTitle/index.php', array('title' => $title, 'subtitle' => $subtitle), true); ?>

  <div class="container">
    <div class="row">
      <div class="col">
        <div class="acordeon tasks">
          <?php foreach ($content as $task) { ?>
            <div class="acordeon-item task">
              <span class="hour">
                <?php echo $task->hour; ?>
                <span class="arrow"></span>
              </span>

              <div class="work">
                <h3 class="title">
                  <?php echo $task->title; ?>
                </h3>

                <?php if (isset($task->text) && $task->text !== "") { ?>
                  <div class="collapsed-section">
                    <p class="text">
                      <?php echo $task->text; ?>
                    </p>
                  </div>
                <?php } ?>
              </div>
            </div>
          <?php } ?>
        </div>

        <?php if (isset($text) && $text !== '') { ?>
          <p class="markdown text">
            <?php echo $text; ?>
          </p>
        <?php } ?>

        <?php if (isset($cta)) { ?>
          <div class="content-center">
            <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
          </div>
        <?php } ?>
      </div>
    </div>
  </div>
</section>