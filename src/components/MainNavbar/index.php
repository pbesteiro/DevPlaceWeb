<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

$file = file_get_contents($srcPath . "constants/main-menu.json");
$menu_items = json_decode($file);
?>


<nav class="main-navbar">
  <ul class="navbar-items">
    <?php foreach ($menu_items as $item) { ?>
      <li class="navbar-item">
        <a href="<?php echo $item->href; ?>" class="menu-link"><?php echo $item->label; ?></a>
      </li>
    <?php } ?>
  </ul>
</nav>