<?php
  $rubai = "";

  class Rubai extends SQLite3 {
    function __construct() {
      $this->open('db/rubai.sqlite');
    }
  }

  $db = new Rubai();

  if ($db){
    $rubai = $db->querySingle("SELECT content FROM Rubai ORDER BY RANDOM() LIMIT 1;");
  } else {
    echo $db->lastErrorMsg();
    exit();
  }
  
  $db->close();
?>
<html>
<head>
  <title>Случайный Рубаи Омара Хайяма</title>
  <link rel="icon" href="img/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <meta charset='UTF-8'>
</head>
<body>
  <div id="header">
    <div class='text' id='title'>
      Случайный Рубаи Омара Хайама
    </div>
  </div>

  <div id="other">
    <div id='rubai-wrapper'>
      <div id='rubai'><?= $rubai ?></div>
    </div>

    <div class='text' id='i-need-another-one'>
      <a href=".">Мне нужен ещё один случайный Рубаи</a>
    </div>
  
    <div id="hayam-itself">
    </div>
  </div>
</body>
</html>
