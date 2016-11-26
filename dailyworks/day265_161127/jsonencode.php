<?php

$array = array(
    "name" => 'yinm',
    "gender" => '男',
    "website" => array(
        "name" => 'dailyworks',
        "published" => "2016-03-08",
        "url" => 'http://yinm.github.io/dailyworks'
    ),
);

$json = json_encode($array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
var_dump($json);