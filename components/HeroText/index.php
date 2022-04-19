<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

/**
 * 
 * COMPONENT NAME
 * ----------------
 * HeroTextDark
 * 
 * 
 * 
 * CONFIGURATION
 * ----------------
 * title: string
 * subtitle?: string
 * content?: string
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
 * showRainbow: boolean
 * desc: Show rainbow band at the top
 * 
 */
?>

<section class="hero-text-component
  <?php
  echo isset($options->skin) && $options->skin ? ' ' . $options->skin : 'dark';
  echo isset($options->firstSection) && $options->firstSection ? ' first-section' : '';
  echo isset($image) && $image !== "" ? ' with-image' : '';
  ?>
" <?php echo isset($styles) && $styles !== "" ? 'style="' . $styles . '"' : ''; ?> <?php echo isset($section_id) && $section_id !== "" ? 'id="' . $section_id . '"' : ''; ?>>
  <?php if (isset($options->showRainbow) && $options->showRainbow) { ?>
    <?php include $srcPath . 'components/Rainbow/index.php'; ?>

    <div class="container text-under text-blended">
      <div class="row">
        <div class="col">
          <h2 class="markdown title">
            <?php echo $title; ?>
          </h2>
        </div>
      </div>
    </div>

    <div class="container text-under text-overlay">
      <div class="row">
        <div class="col">
          <h2 class="markdown title">
            <?php echo $title; ?>
          </h2>
        </div>
      </div>
    </div>
  <?php } ?>

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

        <?php if (isset($cta)) { ?>
          <div class="content-center">
            <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?>
          </div>
        <?php } ?>
      </div>
    </div>

    <?php if (isset($image) && $image !== '') { ?>
      <span class="image-wrapper" style="<?php echo $image->styles; ?>">
        <img src="/dist/images/<?php echo $image->name; ?>" alt="">
      </span>
    <?php } ?>
  </div>
</section>