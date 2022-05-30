<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
?>

<div class="slide-mentor-component">
  <div class="picture">
    <img src="/dist/images/mentor/<?php echo $picture; ?>" alt="Picture">
  </div>

  <h3 class="full-name">
    <?php echo $full_name; ?>
  </h3>

  <div class="degree">
    <strong><?php echo $degree; ?></strong>
  </div>

  <ul class="mentor-social-networks">
    <?php foreach ($socials_networks as $social_network) { ?>
      <li>
        <a href="<?php echo $social_network->link; ?>" target="_blank">
          <img src="/dist/images/social-networks/<?php echo $social_network->logo; ?>" alt="<?php echo $social_network->name; ?>">
        </a>
      </li>
    <?php } ?>
  </ul>
</div>