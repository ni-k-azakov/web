<?php
$recaptcha = $_POST['g-recaptcha-response'];
if(!empty($recaptcha)) {
        $fio = $_POST['fio'];
        $email = $_POST['email'];
        $text = $_POST['QUESTION']
        $fio = htmlspecialchars($fio);
        $email = htmlspecialchars($email);
        $text =  htmlspecialchars($text);
        $fio = urldecode($fio);
        $email = urldecode($email);
        $text = urldecode($text);
        $fio = trim($fio);
        $text = trim($text);
        $email = trim($email);
        if (mail("balansavto@mail.ru", "Заявка с сайта", "От: ".$fio.". E-mail/телефон: ".$email., "Сообщение: ".$text."From: info@balansavto.ru \r\n"))
         {     echo "сообщение успешно отправлено";
        } else {
            echo "при отправке сообщения возникли ошибки";
} else {
        echo "поставьте галочку в поле 'Я не робот' для отправки сообщения";
}
}?>
