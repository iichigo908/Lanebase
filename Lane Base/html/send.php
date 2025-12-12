<?php
// $to = "your-admin@example.com";

// $name = $_POST['name'];
//$type = $_POST['inquiry_type'];
//$content = $_POST['inquiry_content'];

//$subject = "【お問い合わせ】" . $type;

///$message =
//"お名前: " . $name . "\n" .
//"種類: " . $type . "\n\n" .
//"内容:\n" . $content . "\n";

//$headers = "From: no-reply@example.com";

//if (mail($to, $subject, $message, $headers)) {
    // 送信成功 → 完了ページへ移動
    header("Location: ../html/FinishSend.html");
    exit();
//} else {
//    echo "送信に失敗しました。";
// }
?>

