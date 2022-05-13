<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
?>


<?php if (isset($link) && $link !== '') { ?>
  <a class="call-to-action skin-<?php echo isset($type) ? $type : 'filled'; ?>" href="<?php echo $link; ?>">
    <?php echo $label; ?>
    <?php include $srcPath . 'components/Loader/index.php'; ?>
  </a>
<?php } ?>

<?php if (isset($action) && $action !== '') { ?>
  <button type='button' class="call-to-action skin-<?php echo isset($type) ? $type : 'filled'; ?>" onclick=" <?php echo $action; ?>">
    <?php echo $label; ?>
    <?php echo isset($icon) ? '<img src="/dist/images/icons/' . $icon->name . '">' : ''; ?>
    <?php include $srcPath . 'components/Loader/index.php'; ?>
  </button>
<?php } ?>