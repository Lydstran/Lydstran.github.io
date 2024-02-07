<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Construct email message
    $to = "lydia@cltnc.us";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // Redirect to success page
        header("Location: /contact-page/success.html");
        exit;
    } else {
        echo "Failed to send email. Please try again later.";
    }
}
?>
