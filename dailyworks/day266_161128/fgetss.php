<?php

$filename = 'memo.html';
$fp = fopen($filename, 'r');

while (!feof($fp)) {
    $txt = fgetss($fp, 4096, '<h1>');
    echo $txt;
}

fclose($fp);
