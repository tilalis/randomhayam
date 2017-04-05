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
</head>
<body>
  <div class='title'>
    Случайный Рубаи Омара Хайама
  </div>

  <div id='rubai'>
    <div id='text'><?= $rubai ?></div>
  </div>

  <div class='title' id='another-one'>
    <a href=".">Мне нужен ещё один случайный Рубаи</a>
  </div>
</body>
</html>
