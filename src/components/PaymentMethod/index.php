<?php
$index = 0;
$default_gateway = $paymentMethods[0]->gateway;
?>

<div class="payment-method-component">
  <div class="payment-method">
    <?php if (isset($title) && $title !== "") { ?>
      <small class="title">
        <?php echo $title; ?>
      </small>
    <?php } ?>

    <form id="payment-method-form" data-nextstep="<?php echo $default_gateway; ?>">
      <ul class="payment-method-list">
        <?php foreach ($paymentMethods as $paymentMethod) { ?>
          <?php if ($paymentMethod->available) { ?>
            <?php if ($index === 0) {
              $default_gateway = $paymentMethod->gateway;
            } ?>
            <li>
              <input type="radio" name="payment-method" id="<?php echo $paymentMethod->slug; ?>" value="<?php echo $paymentMethod->slug; ?>" data-gateway="<?php echo $paymentMethod->gateway; ?>" <?php echo $index === 0 ? "checked" : ""; ?>>
              <label for="<?php echo $paymentMethod->slug; ?>">
                <img src="/dist/images/payment/<?php echo $paymentMethod->icon; ?>" alt="icon"><?php echo $paymentMethod->name; ?>
              </label>
            </li>
            <?php $index++; ?>
          <?php } ?>
        <?php } ?>
      </ul>

      <!-- <input type="hidden" value="<?php echo $default_gateway; ?>" name="pasarela-pago" id="pasarela-pago"> -->
    </form>
  </div>

  <div class="form-actions">
    <a href="/checkout/<?php echo $prevStep; ?>" class="call-to-action skin-outline back-button">
      Volver
    </a>

    <button type='submit' form="payment-method-form" class="call-to-action skin-filled">
      <span>Continuar</span>
      <?php include $srcPath . 'components/Loader/index.php'; ?>
    </button>
  </div>
</div>