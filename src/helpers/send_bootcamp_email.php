<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include './phpmailer/src/Exception.php';
include './phpmailer/src/PHPMailer.php';
include './phpmailer/src/SMTP.php';

$emailReceptor = 'aplicantes@devplace.tech';
$emailReceptor = 'organizacion@devplace.tech';

$firstname = isset($_REQUEST['nombre']) ? $_REQUEST['nombre'] : '';
$lastName = isset($_REQUEST['apellido']) ? $_REQUEST['apellido'] : '';
$document = isset($_REQUEST['numero-de-documento']) ? $_REQUEST['numero-de-documento'] : '';
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '';
$country = isset($_REQUEST['pais']) ? $_REQUEST['pais'] : '';
$phone = isset($_REQUEST['telefono']) ? $_REQUEST['telefono'] : '';
$level_of_knowledge = isset($_REQUEST['nivel-de-conocimiento']) ? $_REQUEST['nivel-de-conocimiento'] : '';
$others_knowledge = isset($_REQUEST['otros-conocimientos']) ? $_REQUEST['otros-conocimientos'] : '';
$profile = isset($_REQUEST['perfil']) ? $_REQUEST['perfil'] : '';

$mail = new PHPMailer(true);

try {
  // Server settings
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->Host = 'relay-hosting.secureserver.net';
  $mail->SMTPAuth = false;
  $mail->Port = 25;
  $mail->Username = 'organizacion@devplace.tech'; // YOUR gmail email
  $mail->Password = 'koygkucktsrcsqzu';
  $mail->ssl = false;
  $mail->SMTPAutoTLS = false;
  $mail->SMTPSecure = false; // Enable TLS encryption, `ssl` also accepted
  $mail->isHTML(true);

  // Sender and recipient settings
  $mail->setFrom($emailReceptor, 'DevPlace');
  $mail->addAddress($emailReceptor, 'DevPlace');
  $mail->addReplyTo($emailReceptor, $firstname); // to set the reply to

  // Setting the email content
  $mail->IsHTML(true);
  $mail->Subject = "Aplicante Bootcamp " . $profile;
  $mail->Body = '<ul>
                  <li><strong>Nombre: </strong>' . $firstname . ' ' . $lastName . '</li>
                  <li><strong>Número de documento: </strong>' . $document . '</li>
                  <li><strong>E-mail: </strong>' . $email . '</li>
                  <li><strong>Pais: </strong>' . $country . '</li>
                  <li><strong>Teléfono: </strong>' . $phone . '</li>
                  <li><strong>Nivel de conocimiento en programación: </strong>' . $level_of_knowledge . '</li>
                  <li><strong>Otros conocimientos: </strong>' . $others_knowledge . '</li>
                  <li><strong>Perfil: </strong>' . $profile . '</li>
                 </ul>';

  //$mail->AltBody = 'Plain text message body for non-HTML email client. Gmail SMTP email body.';

  $mail->send();
  echo "Email message sent.";
} catch (Exception $e) {
  echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
}
