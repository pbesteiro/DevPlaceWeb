<?php
header('Content-Type: application/json');
$_SERVER['DOCUMENT_ROOT'] = sprintf('%s/', rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$srcPath = $_SERVER['DOCUMENT_ROOT'];

if (!function_exists('slugify')) {
  include $srcPath . "helpers/slugify.php";
}

if (!function_exists('includeWithVariables')) {
  include $srcPath . "helpers/include_with_variables.php";
}

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
  $content = trim(file_get_contents("php://input"));
  $decoded = json_decode($content);

  return includeWithVariables($srcPath . 'components/Carousel/index.php', (array) $decoded, true);

  if (!is_array($decoded)) {
    //If json_decode failed, the JSON is invalid.
  } else {
    // Send error back to user.
  }
}
