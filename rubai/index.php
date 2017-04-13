<?php
  header("Content-Type: application/json"); 

  $db = new SQLite3('db/rubai.sqlite');

  if ($db){
    echo json_encode(
      $db->querySingle(
        "SELECT id, content FROM Rubai ORDER BY RANDOM() LIMIT 1;",
        $entire_row = true
      )
    );
  } else {
    echo $db->lastErrorMsg();
  }
  
  $db->close();
?>
