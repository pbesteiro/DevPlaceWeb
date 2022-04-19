<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
?>
<header class="<?php echo $header_skin; ?>">
  <div class="container">
    <div class="row">
      <div class="col-md-2 mobile-half">
        <a href="/" class="logo menu-link">
          <span></span>
        </a>
      </div>

      <div class="col-md-8 text-center mobile-hidden">
        <?php include $srcPath . 'components/MainNavbar/index.php'; ?>
      </div>

      <div class="col-md-2 text-right mobile-half">
        <button onclick="toggleSidebar()" class="sidebar-menu-open">Menú</button>
      </div>
    </div>
  </div>
</header>

<?php include $srcPath . 'components/SidebarNavbar/index.php'; ?>