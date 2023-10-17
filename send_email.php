<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$organization = $_POST['organization'];
$plan1 = isset($_POST['plan1']) ? $_POST['plan1'] : '';
$plan2 = isset($_POST['plan2']) ? $_POST['plan2'] : '';
$message = $_POST['message'];

$subject = $organization; // Use organization name as the subject
$body =
  "Message: " . $message . "\n\n" .
  "Name of Applicant: " . $name . "\n" .
  "Email Address: " . $email . "\n" .
  "Phone Number: " . $phone . "\n" .
  "Organization Name: " . $organization . "\n" .
  "Plans: " . ($plan1 ? "Occupational safety and health " : "") . ($plan2 ? "First aid and Fire and safety" : "");

$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

$to = "mozacventures97@gmail.com";

// Send the email
$mailSent = mail($to, $subject, $body, $headers);

if ($mailSent) {
  // Email sent successfully
  echo "Email sent!";
} else {
  // Failed to send the email
  echo "Failed to send the email.";
}
?>
