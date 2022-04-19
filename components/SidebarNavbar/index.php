<?php
include $srcPath . 'helpers/menu_tree.php';

$file = file_get_contents($srcPath . "constants/sidebar-menu.json");
$sidebar_menu_items = json_decode($file);

$file = file_get_contents($srcPath . "constants/main-menu.json");
$main_menu_items = json_decode($file);
?>

<nav class="sidebar-navbar" id="sidebar-navbar">
  <div class="sidebar-navbar-header">
    <button class="sidebar-navbar-close-button" onclick="toggleSidebar()">
      <i class="cross-icon">
        <svg width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z" fill="currentColor"></path>
        </svg>
      </i>
    </button>
  </div>

  <div class="sidebar-navbar-body">
    <ul class="sidebar-items main-menu-items">
      <?php echo buildTree($main_menu_items); ?>
    </ul>

    <ul class="sidebar-items sidebar-menu-items">
      <?php echo buildTree($sidebar_menu_items); ?>
    </ul>
  </div>
</nav>