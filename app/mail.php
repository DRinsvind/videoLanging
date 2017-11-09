<?php

$config = array(
    'recepient' => 'adskiyprikol@gmail.com',
    'subject' => 'Тема'
);



if(isset($_POST) && !empty($_POST)) {

    $name = $_POST['name'];
    $contact = $_POST['phone'];
    $config['subject']= $_POST['subject'];
    $to = $config['recepient'];
    $message = '<p>Вам пришло уведомление от пользователя - <b>'.$_POST['name'].'</b></p>
        <br><p>Телефон: <b>'.$contact.'</b></p>';

    mail($to, $config['subject'], $message, "Content-type: text/html; charset=\"utf-8\"\n From: $to");
    header("Location: ./index.html");
    return $_POST;
}

?>