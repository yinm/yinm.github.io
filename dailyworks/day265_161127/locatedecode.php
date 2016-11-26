<?php

$json = file_get_contents('locate.json');

$array = json_decode($json, true);
print_r($array);
print_r($array['japan'][0]['tokyo'][0]);
print_r($array['japan'][0]['tokyo'][1]['city']);
print_r($array['japan'][0]['tokyo'][2]);

$obj = json_decode($json, false);
print_r($obj);
print_r($obj->japan[0]->tokyo[0]);
print_r($obj->japan[0]->tokyo[1]->city);
print_r($obj->japan[0]->tokyo[2]);