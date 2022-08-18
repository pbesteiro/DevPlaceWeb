<?php

$srcPath = $_SERVER['DOCUMENT_ROOT'];
$mentor = isset($mentor) && $mentor !== '' ? $mentor : 'Aún no asignado';
$discount = isset($discount) && $discount !== '' ? $discount : 0;

$courseInformation = array(
  '_id' => $_id,
  'name' => $name,
  'days' => $days,
  'period' => $period,
  'hours' => $hours,
  "modality" => $modality,
  'mentor' => $mentor,
  'price' => $price,
  'discount_price' => $discount_price,
  'discount' => $discount,
  'duration' => $duration,
  'detail' => $detail,
  'paymentLink' => $paymentLink,
  'link' => $link,
  'type' => $type,
  'category' => $category
);

setlocale(LC_MONETARY, 'es_AR');

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

<div class="slide-calendar-component">
  <div class="discount">
    <div>50% OFF</div>
    <small>Hasta 12 cuotas sin interés</small>
  </div>

  <div class="slide-body" <?php echo "data-course='" . json_encode($courseInformation) . "'"; ?>>
    <h3 class="title">
      <?php echo $days; ?><br />
      <?php echo $period; ?>
    </h3>

    <div class="text">
      <em>Horario</em>
      <strong><?php echo $hours; ?></strong>
    </div>

    <div class="text">
      <em>Modalidad</em>
      <strong><?php echo $modality; ?></strong>
    </div>

    <div class="text">
      <em>Profesor</em>
      <strong><?php echo $mentor; ?></strong>
    </div>

    <div class="text">
      <em>Precio</em>
      <strong>
        <?php $price = number_format($price, 0, ',', '.'); ?>
        <strike>$<?php echo $price; ?>ARS</strike>

        <?php $discount_price = number_format($discount_price, 0, ',', '.'); ?>
        <span class="m-l-10">$<?php echo $discount_price; ?>ARS</span>
      </strong>
    </div>
    <br>
    <?php if (isset($cta)) { ?> <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?> <?php } ?>
  </div>
</div>