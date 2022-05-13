<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

$planInformation = array(
  'name' => strip_tags($name),
  'price' => strip_tags($price),
  'clarification' => $clarification,
  'content' => $content,
);
?>


<div class="slide-empresas-component" onclick='saveJsonInLocalStorage("selected-plan", <?php echo "JSON.stringify(" . json_encode($planInformation) . ")" ?>)'>
  <div class="slide-component">
    <div class="slide">
      <p class="name"><?php echo $name; ?></p>
      <p class="cost">$ <?php echo $price; ?> <span>+ IVA</span></p>
      <p class="nota">por colaborador/a por mes.</p>
    </div>
    <hr>

    <div class="benefits">
      <h3 class="title">Beneficios</h3>
      <?php foreach ($content as $benefit) { ?>
        <ul class="benefit">
          <li class="item">
            <?php echo $benefit->item; ?>
          </li>
        </ul>
      <?php } ?>
    </div>

    <div class="button-wrapp">
      <p class="clarification"><?php echo $clarification; ?></p>

      <button type='button' onclick="showModal('hire-plan-modal')" class="call-to-action skin-filled">
        Seleccionar Plan
      </button>
    </div>
  </div>
</div>