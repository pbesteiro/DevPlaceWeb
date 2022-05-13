<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include './phpmailer/src/Exception.php';
include './phpmailer/src/PHPMailer.php';
include './phpmailer/src/SMTP.php';

$emailReceptor = 'pagos@devplace.tech';
$emailReceptor = 'jniemann87@gmail.com';

$firstname = isset($_REQUEST['nombre']) ? $_REQUEST['nombre'] : '';
$lastName = isset($_REQUEST['apellido']) ? $_REQUEST['apellido'] : '';
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '';
$country = isset($_REQUEST['pais']) ? $_REQUEST['pais'] : '';
$phone = isset($_REQUEST['telefono']) ? $_REQUEST['telefono'] : '';
$company = isset($_REQUEST['empresa']) ? $_REQUEST['empresa'] : '';
$position = isset($_REQUEST['puesto']) ? $_REQUEST['puesto'] : '';

$mail = new PHPMailer(true);

try {
  // Server settings
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->Host = 'relay-hosting.secureserver.net';
  $mail->SMTPAuth = false;
  $mail->Port = 25;
  $mail->Username = 'info@devplace.tech'; // YOUR gmail email
  $mail->Password = '1nf0D3vPl4ce';
  $mail->ssl = false;
  $mail->SMTPAutoTLS = false;
  $mail->SMTPSecure = false; // Enable TLS encryption, `ssl` also accepted
  $mail->isHTML(true);

  // Sender and recipient settings
  $mail->setFrom('info@devplace.tech', 'DevPlace');
  $mail->addAddress($emailReceptor, 'DevPlace');
  $mail->addReplyTo('info@devplace.tech', $firstname); // to set the reply to

  // Setting the email content
  $mail->IsHTML(true);
  $mail->Subject = "Transferencia Bancaria - DevPlace Portal";
  $mail->Body = '<ul>
                  <li><strong>Nombre: </strong>' . $firstname . ' ' . $lastName . '</li>
                  <li><strong>E-mail: </strong>' . $email . '</li>
                  <li><strong>Pais: </strong>' . $country . '</li>
                  <li><strong>Teléfono: </strong>' . $phone . '</li>
                  <li><strong>Empresa: </strong>' . $company . '</li>
                  <li><strong>Puesto: </strong>' . $position . '</li>
                </ul>';

  //$mail->AltBody = 'Plain text message body for non-HTML email client. Gmail SMTP email body.';

  $mail->send();
  echo "Email message sent.";
} catch (Exception $e) {
  echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
}
