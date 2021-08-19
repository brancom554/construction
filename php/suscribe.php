<?php
@session_start();


error_reporting(0);
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// Load Composer's autoloader
include('vendor/autoload.php');
include("MailClass.php");




$phone_number = $_POST["phone"];
$sujet="Je souhaite etre notifié pour le demarrage de gemo.app";


$_SESSION["email"]=$email;
//$_SESSION["telephone"]=$telephone;

			//Ajout du mail
			


   ///$subject = 'Message Verification NEOSURF';
   $from="contact@gemo.app";
     $headers = $from . "\r\n" .
     'Reply-To: '.$from.'  "\r\n" '.
     'X-Mailer: PHP/' . phpversion();
     // Always set content-type when sending HTML email
     $headers = "MIME-Version: 1.0" . "\r\n";
	
     $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
     
   


//=====Ajout du message au format HTML
    
    $message ="<html><head></head><body>
<b>NOTIFIER PAR TELEPHONE -  ". $phone."-".$nom." &nbsp; </b><br>
<br>


Bonjour, 


Vous avez un nouveau message provenant du site web.<br>

TELEPHONE:".$phone_number." <br>
SUJET:".$sujet." <br>



.
</body></html>";

 $statusMessage ="";
 	   // Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
 
try {
    //Server settings
    $mail->SMTPDebug = false;//SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'email-smtp.eu-west-1.amazonaws.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'tAKIAYVVWBFD4YB2RVU4P';                     // SMTP username
    $mail->Password   = 'BEEb3IO9t3IodzHwkdM8NBTuUQGL00dQZvp2zZi6zD4Q';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('support-ussd@mydko-sarl.com', 'GEMO APP SITE');
    $mail->addAddress($to);     // Add a recipient
                  // Name is optional
    $mail->addReplyTo('donotreply@mydko-sarl.com', 'Information');
    $mail->addBCC('support@mydko-sarl.com');
    
	$mail->CharSet = 'UTF-8';
	
	
	
	
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = ''.$sujet;
    $mail->Body    = $message;
    $mail->AltBody = '';

    @$mail->send();
	
	$statusMessage = 'Message has been sent';
    //echo 'Message has been sent';
} catch (Exception $e) {
    $statusMessage= "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}


 
 
   
//==========
 mail("contact@gemo.app", "Message de contact", $message, $headers);
			
			//fin ajout mail
		
///header("Location:index.html");
		
		
		
	


?>