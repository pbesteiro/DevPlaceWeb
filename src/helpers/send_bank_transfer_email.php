<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include './phpmailer/src/Exception.php';
include './phpmailer/src/PHPMailer.php';
include './phpmailer/src/SMTP.php';

$emailReceptor = 'pagos@devplace.tech';
$emailReceptor = 'organizacion@devplace.tech';

$firstname = isset($_REQUEST['nombre']) ? $_REQUEST['nombre'] : '';
$lastName = isset($_REQUEST['apellido']) ? $_REQUEST['apellido'] : '';
$cuit = isset($_REQUEST['cuit']) ? $_REQUEST['cuit'] : '';
$ticket = isset($_FILES['comprobante-de-pago']) ? $_FILES['comprobante-de-pago'] : '';

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
  $mail->Subject = "Transferencia Bancaria - DevPlace Portal";
  $mail->Body = '<ul>
                  <li><strong>Nombre: </strong>' . $firstname . ' ' . $lastName . '</li>
                  <li><strong>CUIT: </strong>' . $cuit . '</li>
                  <li><strong>Fechas: </strong>' . $date . '</li>
                 </ul>';

  //$mail->AltBody = 'Plain text message body for non-HTML email client. Gmail SMTP email body.';

  if (
    isset($ticket) &&
    $ticket['error'] == UPLOAD_ERR_OK
  ) {
    $mail->AddAttachment(
      $ticket['tmp_name'],
      $ticket['name']
    );
  }

  $mail->send();
  echo "Email message sent.";
} catch (Exception $e) {
  echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
}
