<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include './phpmailer/src/Exception.php';
include './phpmailer/src/PHPMailer.php';
include './phpmailer/src/SMTP.php';

try {

$emailReceptor = 'pagos@devplace.tech';
$firstname = isset($_REQUEST['nombre']) ? $_REQUEST['nombre'] :'';
$lastName = isset($_REQUEST['apellido']) ? $_REQUEST['apellido'] :'';
$document = isset($_REQUEST['documento']) ? $_REQUEST['documento'] :'';
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] :'';
$country = isset($_REQUEST['pais']) ? $_REQUEST['pais'] :'';
$curse = isset($_REQUEST['curso']) ? $_REQUEST['curso'] :'';
$date = isset($_REQUEST['fecha']) ? $_REQUEST['fecha'] :'';
$phone = isset($_REQUEST['telefono']) ? $_REQUEST['telefono'] :'';



// passing true in constructor enables exceptions in PHPMailer
$mail = new PHPMailer(true);
  // Server settings
  //$mail->SMTPDebug = SMTP::DEBUG_SERVER; // for detailed debug output
  $mail->isSMTP();
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
  $mail->Subject = "TransferenciaBancaria - DevPlace Portal";
  $mail->Body = '<ul>
                  <li><strong>Nombre: </strong>' . $firstname . ' '.$lastName. '</li>
                  <li><strong>Documeto: </strong>' . $document . '</li>
                  <li><strong>E-mail: </strong>' . $email . '</li>
                  <li><strong>Pais: </strong>' . $country . '</li>
                  <li><strong>Teléfono: </strong>' . $phone . '</li>
                  <li><strong>Curso: </strong>' . $curse . '</li>
                  <li><strong>Fechas: </strong>' . $date . '</li>
                 </ul>';
  //$mail->AltBody = 'Plain text message body for non-HTML email client. Gmail SMTP email body.';
  
  if (isset($_FILES['comprobante']) &&
  $_FILES['comprobante']['error'] == UPLOAD_ERR_OK) {
  $mail->AddAttachment($_FILES['comprobante']['tmp_name'],
                       $_FILES['comprobante']['name']);
}

  $mail->send();
  echo "Email message sent.";
} catch (Exception $e) {
  echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
}
