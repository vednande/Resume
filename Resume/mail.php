<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "vednande10@gmail.com";
$sub = "Mail from website";

$txt = "Name  = ". $name . "\r\n Email = " . $email / "\r\n Subject = " . $subject . "\r\n Message = " . $message;

$headers = "From: noreply@vednande.com";

if($email != NULL){
    mail($to , $subject, $txt, $headers);
}
 
header("Location:Thankyou.html");