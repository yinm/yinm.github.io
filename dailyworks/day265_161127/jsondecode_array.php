<?php

$json = file_get_contents('sample.json');

$array = json_decode($json, true);
print_r($array);