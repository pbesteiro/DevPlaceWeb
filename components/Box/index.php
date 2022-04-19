<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

/**
 * 
 * COMPONENT NAME
 * ----------------
 * HeroText
 * 
 * 
 * 
 * CONFIGURATION
 * ----------------
 * title: string
 * subtitle?: string
 * content?: string | componet
 * cta?: {
 *   href: string
 *   action: string
 *   label: string
 * }
 * 
 * 
 * 
 * OPTIONAL
 * ----------------
 * show_rainbow: boolean
 * desc: Show rainbow band at the top
 * 
 */
?>

<section class="box-component
  <?php echo isset($image) && $image !== "" ? ' with-image' : ''; ?>
" <?php echo isset($styles) && $styles !== "" ? 'style="' . $styles . '"' : ''; ?> <?php echo isset($section_id) && $section_id !== "" ? 'id="' . $section_id . '"' : ''; ?>>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="markdown title">
          <?php echo $title; ?>
        </h2>

        <?php if (isset($subtitle) && $subtitle !== '') { ?>
          <small class="markdown subtitle">
            <?php echo $subtitle; ?>
          </small>
        <?php } ?>

        <?php if (isset($content)) { ?>
          <?php if (is_string($content) && $content !== '') { ?>
            <p class="text"><?php echo $content; ?></p>
          <?php } ?>

          <?php if (is_array($content)) { ?>
            <div class="content">
              <div class="content-wrapper <?php echo 'total-items-' . count($content); ?>">
                <?php
                foreach ($content as $section) {
                  includeWithVariables($srcPath . 'components/' . $section->component . '/index.php', (array) $section, true);
                }
                unset($section);
                ?>
              </div>
            </div>
          <?php } ?>
        <?php } ?>

        <?php if (isset($cta)) { ?>
          <div class="content-center">
            <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
          </div>
        <?php } ?>
      </div>

      <?php if (isset($image) && $image !== '') { ?>
        <span class="image-wrapper" style="<?php echo $image->styles; ?>">
          <img src="/dist/images/<?php echo $image->name; ?>" alt="">
        </span>
      <?php } ?>
    </div>
  </div>
</section>