<?php

$filename = 'memo.txt';

$fp = fopen($filename, 'r');

while (!feof($fp)) {
    $txt = fgets($fp);
    echo $txt;
}

fclose($fp);
