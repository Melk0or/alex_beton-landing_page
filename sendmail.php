<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';
    
    // Для более ранних версий PHPMailer
    //require_once '/PHPMailer/PHPMailerAutoload.php';
    
    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';
    
    // Настройки SMTP
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 0;
    
    $mail->Host = 'ssl://smtp.mail.ru';
    $mail->Port = 465;
    $mail->Username = 'mailer2024@mail.ru';
    $mail->Password = 'ecaKXCdRKQa9VA4Spbmr';
    
    // От кого
    $mail->setFrom('mail@snipp.ru', 'Snipp.ru');		
    
    // Кому
    $mail->addAddress('gadzhiev-2019@bk.ru');
    
    // Тема письма
    $mail->Subject = 'Здравствуйте. У вас новая Заявка на сайте';
    
    // Тело письма
    $body = '<h1>Посетитель оставил заявку</h1>';
    if(trim(!empty($_POST['name']))) {
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))) {
        $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
    }
    
    $mail->msgHTML($body);
    
    
    $mail->send();
    $message = "Данные отправлены!";
    $response = ['message' => $message];
    header('Content-Type: application/json');
    echo json_encode($response);





//    use PHPMailer\PHPMailer\PHPMailer;
//    use PHPMailer\PHPMailer\Exception;
//    use PHPMailer\PHPMailer\SMTP;

//    require 'phpmailer/src/Exception.php';
//    require 'phpmailer/src/PHPMailer.php';
//    require 'phpmailer/src/SMTP.php';

//    $mail = new PHPMailer(true);
//    $mail->CharSet = 'UTF-8';
//    $mail->setLanguage('ru', 'phpmailer/language/');
//    $mail->IsHTML(true);

//    //ОТ кого письмо 
//    $mail->setFrom('mailer@mail.ru', 'MAILER');
//    //Кому отправить
//    $mail->addAddress('gadzhiev-2019@bk.ru');
//    //Тема письма 
//    $mail->Subject = 'Здравствуйте. У вас новая Заявка на сайте';

//    //Тело Пиьсма
//    $body = '<h1>Посетитель оставил заявку</h1>';

//    if(trim(!empty($_POST['name']))) {
//        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
//    }
//    if(trim(!empty($_POST['phone']))) {
//        $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
//    }

//    //Отправялем 
//    $mail->Body = $body;
   
//    if (!$mail->send()) {
//        $message = 'Ошибка';
//    }
//    else {
    //    $message = "Данные отправлены!";
//    }

//    $response = ['message' => $message];
   
//    header('Content-Type: application/json');
//    echo json_encode($response);
//    ob_start();
//    print_r($_POST);
//    $test_text=ob_get_contents();
//    ob_end_clean();
//    $h = fopen(__DIR__.'/1.txt', 'ab');
//    fwrite($h, $test_text);
//    fclose($h);

?>





