<?php
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];
?>

<div class="slide-student-component">
  <div class="picture">
    <img src="/dist/images/student/<?php echo $picture; ?>" alt="Picture">
  </div>

  <h3 class="full-name">
    <?php echo $full_name; ?>
  </h3>

  <div class="link">
    <a href="<?php echo $cta->link; ?>"><?php echo $cta->label; ?></a>
  </div>

  <div class="comments">
    <em><?php echo $comments; ?></em>
  </div>
</div>