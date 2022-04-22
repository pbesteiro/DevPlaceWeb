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

<div class="slide-courses-component">
  <div class="image-wrapper">
    <img src="/dist/images/courses/<?php echo $image; ?>" alt="">
  </div>

  <p class="duration">Duración: <?php echo $duration; ?></p>
  <p class="name"><?php echo $name; ?></p>

  <div class="value">
    <p class="cost">$ <?php echo $price; ?></p>
    <p class="payment"><?php echo $payment; ?></p>
  </div>

  <div class="buttonWrapper">
    <?php if (isset($cta)) { ?> <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?> <?php } ?>
  </div>
</div>