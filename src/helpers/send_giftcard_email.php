<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include './phpmailer/src/Exception.php';
include './phpmailer/src/PHPMailer.php';
include './phpmailer/src/SMTP.php';

$facebook = 'https://www.facebook.com/DevPlace.Arg/';
$twitter = 'https://twitter.com/DevPlace_com';
$linkeding = 'https://www.linkedin.com/company/76796344/';
$instagram = 'https://www.instagram.com/devplace.tech/';

$domain = 'https://devplace.com.ar/';


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
$message = isset($_REQUEST['mensaje']) ? $_REQUEST['mensaje'] : '';

$emailReceptor = $recipientEmail;

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
  $mail->Subject = "Te han regalado un curso en DevPlace";
  $mail->Body = '<div style="background-color:rgb(237, 237, 237); padding: 0px 16px;">
                  <table width="100%" cellspacing="0" cellpadding="0px" style="max-width: 700px; margin: 0 auto;">
                    <tbody>
                      <tr>
                        <td>
                          <div style="height: 50px;"></div>
                        </td>
                      </tr>
                  
                      <tr>
                        <td>
                          <table width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td style="text-align: center;">
                                  <a target="_blank" href="' . $domain . '" style="text-decoration: none; display: inline-block;">
                                    <img src="' . $domain . 'dist/images/logo.png" alt="DevPlace.tech" width="250px" height="auto">
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                  
                      <tr>
                        <td>
                          <div style="height: 50px;"></div>
                        </td>
                      </tr>
                  
                      <tr>
                        <td>
                          <div style="border-radius: 10px; padding: 40px 16px; background-color: white;">
                            <table width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td>
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <h2 style="margin:0; line-height: 34px; font-family: \'open sans\', \'helvetica neue\', helvetica, arial, sans-serif; font-size: 28px; font-style: normal; font-weight: bold; color:#000000; text-align: center;">
                                              ¡Hola ' . $recipientName . '!
                                            </h2>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <div style="height: 30px;"></div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <p style="margin:0 auto; max-width: 500px; font-family: \'open sans\', \'helvetica neue\', helvetica, arial, sans-serif; line-height: 24px; color:#040404; font-size: 16px; text-align: center;">
                                              ¡Felicitaciones! Queremos contarte que <strong>' . $firstname . ' ' . $lastName . '</strong> te ha regalado el curso de <strong>' . $curseName . '</strong> y 
                                              pronto estaras recibiendo un correo electrónico nuestro con toda la información que necesitas para acceder a él.
                                            </p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <div style="height: 80px;"></div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table width="100%" cellspacing="0" cellpadding="0">
                                              <tbody>
                                                <tr>
                                                  <td style="text-align: center;">
                                                    <div style="    
                                                      display: block;
                                                      max-width: 420px;
                                                      min-height: 200px;
                                                      background-color: #4a20a8;
                                                      border-radius: 10px;
                                                      padding: 0px 15px;
                                                      margin: 0 auto;
                                                    ">
                                                      <div style="height: 20px;"></div>
                                                      <p style="margin: 0; font-family: \'open sans\', \'helvetica neue\', helvetica, arial, sans-serif; color: white; text-align: center; line-height: 24px; font-size: 16px;">
                                                        Mensaje de ' . $firstname . ':
                                                      </p>
                                                      <div style="height: 20px;"></div>
                                                      <p style="
                                                        margin: 0;
                                                        font-family: \'open sans\', \'helvetica neue\', helvetica, arial, sans-serif;
                                                        color: white;
                                                        text-align: center;
                                                        line-height: 24px;
                                                        font-size: 16px;
                                                        font-weight: lighter;
                                                        letter-spacing: 2px;"
                                                      >
                                                        ' . $message . '
                                                      </p>
                                                      <div style="height: 20px;"></div>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <div style="height: 80px;"></div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <p style="margin:0; font-family: \'open sans\', \'helvetica neue\', helvetica, arial, sans-serif; line-height: 24px; color:#040404; font-size: 16px; text-align: center;">¡Te esperamos!</p>
                                            <p style="margin:0; font-family: \'open sans\', \'helvetica neue\', helvetica, arial, sans-serif; line-height: 24px; color:#040404; font-size: 16px; text-align: center;">El equipo de DevPlace</p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <div style="height: 30px;"></div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                  
                      <tr>
                        <td>
                          <table width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td>
                                  <div style="height: 30px;"></div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p style="margin: 0; font-family: \'open sans\', \'helvetica neue\', helvetica, arial, sans-serif; color: #999999; text-align: center; line-height: 24px; font-size: 16px;">
                                    <strong>¡Estamos aquí para ayudar!</strong><br />
                                    Si tienes alguna pregunta, visita nuestras <a href="' . $domain . 'preguntas-frecuentes.php" target="_blank" style="color:#999999; display: inline-block;">preguntas frecuentes</a>.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div style="height: 30px;"></div>
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align: center;">
                                  <a href="' . $facebook . '" target="_blank" style="text-decoration: none; display: inline-block;">
                                    <img src="' . $domain . 'dist/images/social-networks/facebook.png" width="32px" height="32px" alt="Devplace Facebook">
                                  </a>
                                  <a href="' . $twitter . '" target="_blank" style="text-decoration: none; display: inline-block;">
                                    <img src="' . $domain . 'dist/images/social-networks/twitter.png" width="32px" height="32px" alt="Devplace Twitter">
                                  </a>
                                  <a href="' . $linkeding . '" target="_blank" style="text-decoration: none; display: inline-block;">
                                    <img src="' . $domain . 'dist/images/social-networks/linkedin.png" width="32px" height="32px" alt="Devplace LinkedIn">
                                  </a>
                                  <a href="' . $instagram . '" target="_blank" style="text-decoration: none; display: inline-block;">
                                    <img src="' . $domain . 'dist/images/social-networks/instagram.png" width="32px" height="32px" alt="Devplace Instagram">
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div style="height: 30px;"></div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p style="
                                    font-size: 10px;
                                    color: #9f9f9f;
                                    line-height: 14px;
                                    max-width: 600px;
                                    margin: 0 auto;
                                    text-align: center;"
                                  >
                                    ESTE ES UN MENSAJE DE CORREO ELECTRÓNICO AUTOMATIZADO, NO SE PUEDE COPIAR, TRANSMITIR, ADAPTAR O UTILIZAR DE CUALQUIER OTRA MANERA SIN LA PREVIA AUTORIZACIÓN POR ESCRITO DEL TITULAR DE DERECHOS DE PROPIEDAD INTELECTUAL DEL MISMO. SI CREE QUE ESTE CORREO ELECTRÓNICO LE LLEGO POR ERROR PONGASE EN CONTACTO CON NOSOTROS A <a style="color: inherit;" href="mailto:admin@devplace.tech">ADMIN@DEVPLACE.TECH</a>.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div style="height: 30px;"></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>';

  //$mail->AltBody = 'Plain text message body for non-HTML email client. Gmail SMTP email body.';

  $mail->send();
  echo "Email message sent.";
} catch (Exception $e) {
  echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
}
