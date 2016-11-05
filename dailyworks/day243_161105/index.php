<?php

define('DB_DATABASE', 'dotinstall_db');
define('DB_USERNAME', 'dbuser');
define('DB_PASSWORD', '一応変更');
define('PDO_DSN', 'mysql:dbhost=localhost;dbname=' . DB_DATABASE);

try {
  $db = new PDO(PDO_DSN, DB_USERNAME, DB_PASSWORD);
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $db->beginTransaction();
  $db->exec("update users set score = score - 10 where id = '11'");
  $db->exec("update users set score = score + 10 where id = '13'");
  $db->commit();

} catch(PDOException $e) {
  $db->rollback();
  echo $e->getMessage();
  exit;
}
