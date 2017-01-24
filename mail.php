<?php

$recepient = "rybalkavano@gmail.com";
$sitename = "RYBALKA_IVAN";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$textarea = trim($_POST["textarea"]);
$message = "Имя: $name \nТелефон: $phone \nE-mail: $email \nText: $textarea";

$pagetitle = "Новая заявка с сайта $sitename";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>