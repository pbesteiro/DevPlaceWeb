<?php

$srcPath = $_SERVER['DOCUMENT_ROOT'];
$mentor = isset($mentor->name) && $mentor->name !== '' ? $mentor : 'Aún no asignado';
$discount = isset($discount) && $discount !== '' ? $discount : 0;

$courseInformation = array(
  '_id' => $_id,
  'name' => $name,
  'days' => $days,
  'period' => $period,
  'hours' => $hours,
  "modality" => $modality,
  'mentor' => $mentor->name,
  'price' => $price,
  'discount' => $discount,
  'duration' => $duration,
  'detail' => $detail,
  'paymentLink' => $paymentLink,
);
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

<div class="slide-calendar-component" <?php echo "data-course='" . json_encode($courseInformation) . "'"; ?>>
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
    <strong>$<?php echo $price; ?></strong>
  </div>
  <?php if (isset($cta)) { ?> <?php includeWithVariables($srcPath . 'components/CallToAction/index.php', (array) $cta, true); ?> <?php } ?>
</div>