<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

$file = file_get_contents($srcPath . "constants/inscription-benefits.json");
$inscriptionBenefits = json_decode($file);
?>

<div class="inscription-benefits">
  <div class="benefits">
    <h3>TU INSCRIPCION<br /> <span>INCLUYE<span></h3>
    <ul>
      <?php foreach ($inscriptionBenefits as $benefit) { ?>
        <li><?php echo $benefit; ?></li>
      <?php } ?>
    </ul>
  </div>
</div>