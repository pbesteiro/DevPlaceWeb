<div class="bank-information-component">
  <div class="title-bank-information">
  <img src="/dist/images/payment/bank-transfer.png" width="30px" height="26px" alt="icon">
  <h3 class="title">
    <?php echo $title; ?>
  </h3>
  </div>

  <ul>
    <?php foreach ($information as $item) { ?>
      <li><?php echo $item->label; ?>: <?php echo $item->value; ?></li>
    <?php } ?>
  </ul>

  <div class="horizontal-separation"></div>
</div>