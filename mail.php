<?php

 //****************************************
 //edit here
 $to = 'dmytros.sydorenko@gmail.com';
 $from = 'From: '.$email."\n";
 //****************************************
 if(isset($_POST['submit'])) { 
  $msg_subject = 'Contact form';
  $name = $_POST['name'];
  $mail = $_POST['mail'];
  $job = $_POST['job'];
  $company = $_POST['company'];
  $update = $_POST['update'];
  // send mail
  mail($to, $msg_subject, "\n".
   'Name: '.
   'Receive updates from Collabix: '
  );
  header("Location: thankyou.html");
 }
 else {
  header("Location: ".@$_SERVER['HTTP_REFERER']);
 }
?>