<?php

$filename = 'memo.txt';
$content = file_get_contents($filename);

echo $content;