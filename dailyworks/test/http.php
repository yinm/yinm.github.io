<?php
$n = $_GET['name'];
//$n = $_POST['name'];
if (empty($n)) {
  header('HTTP/1.1 500 Internal Server Error');
} else {
  print('こんにちは、'.$n.'さん！');
}

/*
$data = json_decode(file_get_contents('php://input'), true);

if (empty($data['name'])) {
  header('HTTP/1.1 500 Internal Server Error');
} else {
  print('こんにちは、'.$data['name'].'さん！');
}
*/
