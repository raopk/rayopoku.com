<?php

    $name = $_Post['name'];
    $visitor_email = $_Post['email'];
    $message = $_Post['message'];



    $_email_from = 'ray@rayopoku.com';

    $_email_subject = "New Form Submission";

    $_email_body = "User Name: $name.\n">
                    "User Email: $visitor_email.\n"
                    "User Message: $message.\n";


    $to = "rayopk@gmail.com";

    $headers = "From $email_from \r\n";
    
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject, $email_body, $headers);
    
    header("Location: index.html");
?>