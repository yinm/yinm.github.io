<?php

$json = file_get_contents('sample.json');

$array = json_decode($json, false);
print_r($array);