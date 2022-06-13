<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

if (!function_exists('slugify')) {
  include $srcPath . "helpers/slugify.php";
}

if (!function_exists('includeWithVariables')) {
  include $srcPath . "helpers/include_with_variables.php";
}

/**
 * 
 * 
 *  id: string
 *  component: "Carousel",
 *  options: {
 *    skin: "calendar" | "next-dates" | "tools" | "courses",
 *    band: "top" | "middle" | "bottom",
 *    destroyInMobile: boolean,
 *  }
 *  title?: string,
 *  subtitle?: string,
 *  text?: string,
 *  "content": Slide[]
 * }
 * 
 * 
 * 
 */
?>

<section class="
  carousel-component
  <?php echo isset($options->skin) && $options->skin !== '' ? 'carousel-' . $options->skin . '-skin' : ''; ?>
  <?php echo isset($options->showRainbowDesktop) && $options->showRainbowDesktop ? 'show-rainbow-desktop' : ""; ?>
  <?php echo isset($options->showRainbowMobile) && $options->showRainbowMobile ? 'show-rainbow-mobile' : ""; ?>
  <?php echo isset($options->rainbowMobilePosition) && $options->rainbowMobilePosition !== '' ? 'rainbow-mobile-position-' . $options->rainbowMobilePosition : ""; ?>
  <?php echo isset($options->rainbowDesktopPosition) && $options->rainbowDesktopPosition !== '' ? 'rainbow-desktop-position-' . $options->rainbowDesktopPosition : ""; ?>
" <?php echo isset($section_id) && $section_id !== "" ? 'id="' . $section_id . '"' : ''; ?>>
  <div class="container">
    <div class="row">
      <div class="col">
        <?php if (isset($title) && $title !== "") { ?>
          <h2 class="title">
            <?php echo $title; ?>
          </h2>
        <?php } ?>

        <?php if (isset($subtitle) && $subtitle !== "") { ?>
          <small class="subtitle">
            <?php echo $subtitle; ?>
          </small>
        <?php } ?>

        <?php if (isset($text) && $text !== "") { ?>
          <small class="text">
            <?php echo $text; ?>
          </small>
        <?php } ?>
      </div>
    </div>
  </div>

  <div class="carousel">
    <?php include $srcPath . 'components/Rainbow/index.php'; ?>
    <?php include $srcPath . 'components/Loader/index.php'; ?>

    <?php if (is_array($content)) { ?>
      <div class="carousel-container">
        <div class="carousel-row">
          <div class="glide" data-skin="<?php echo isset($options->skin) && $options->skin !== '' ? $options->skin : 'calendar'; ?>">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <?php
                foreach ($content as $section) {
                  echo '<li class="glide__slide">';
                  includeWithVariables($srcPath . 'components/' . $section->component . '/index.php', (array) $section, true);
                  echo '</li>';
                }
                unset($section);
                ?>
              </ul>
            </div>

            <div class="glide__arrows mobile-hidden" data-glide-el="controls">
              <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              </button>
              <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              </button>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>


</section>