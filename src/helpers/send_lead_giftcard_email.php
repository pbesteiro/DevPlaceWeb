<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include './phpmailer/src/Exception.php';
include './phpmailer/src/PHPMailer.php';
include './phpmailer/src/SMTP.php';

$emailReceptor = 'info@devplace.tech';
$emailReceptor = 'organizacion@devplace.tech';

$firstname = isset($_REQUEST['nombre']) ? $_REQUEST['nombre'] : '';
$lastName = isset($_REQUEST['apellido']) ? $_REQUEST['apellido'] : '';
$document = isset($_REQUEST['numero-de-documento']) ? $_REQUEST['numero-de-documento'] : '';
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '';
$country = isset($_REQUEST['pais']) ? $_REQUEST['pais'] : '';
$phone = isset($_REQUEST['telefono']) ? $_REQUEST['telefono'] : '';
$curse = isset($_REQUEST['curso']) ? $_REQUEST['curso'] : '';
$curseName = isset($_REQUEST['cursoName']) ? $_REQUEST['cursoName'] : '';
$launching = isset($_REQUEST['lanzamiento']) ? $_REQUEST['lanzamiento'] : '';
$recipientName = isset($_REQUEST['receptor-nombre']) ? $_REQUEST['receptor-nombre'] : '';
$recipientLastName = isset($_REQUEST['receptor-apellido']) ? $_REQUEST['receptor-apellido'] : '';
$recipientEmail = isset($_REQUEST['receptor-email']) ? $_REQUEST['receptor-email'] : '';
$deliveryDate = isset($_REQUEST['fecha-de-entrega']) ? $_REQUEST['fecha-de-entrega'] : '';

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
  $mail->Subject = "Lead Gift Card curso " . $curseName;
  $mail->Body = '<ul>
                  <li><strong>Nombre: </strong>' . $firstname . ' ' . $lastName . '</li>
                  <li><strong>Documeto: </strong>' . $document . '</li>
                  <li><strong>E-mail: </strong>' . $email . '</li>
                  <li><strong>Pais: </strong>' . $country . '</li>
                  <li><strong>Teléfono: </strong>' . $phone . '</li>
                  <li><strong>Curso ID: </strong>' . $curse . '</li>
                  <li><strong>Curso nombre: </strong>' . $curseName . '</li>
                  <li><strong>Fecha de lanzamiento: </strong>' . $launching . '</li>
                </ul>
                <h3>COMPLETAR LOS DATOS DEL DESTINATARIO</h3>
                <ul>
                  <li><strong>Nombre: </strong>' . $recipientName . ' ' . $recipientLastName . '</li>
                  <li><strong>E-mail: </strong>' . $recipientEmail . '</li>
                </ul>
                <h3>FECHA DE ENTREGA</h3>
                <ul>
                  <li>' . $deliveryDate . '</li>
                </ul>
                ';


  //$mail->AltBody = 'Plain text message body for non-HTML email client. Gmail SMTP email body.';

  $mail->send();
  echo "Email message sent.";
} catch (Exception $e) {
  echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
}
