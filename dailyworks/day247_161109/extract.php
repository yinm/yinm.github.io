<?php

function outputUser($user) {
  extract($user);

  if(isset($user_id))
    echo "ID: {$user_id}\n";
  if(isset($screen_name))
    echo "Screen name: {$screen_name}\n";
  if(isset($age))
    echo "Age: {$age}\n";
}

$user_id = 1;
$screen_name = 'yinm';
$age = 27;

outputUser(compact(
  'user_id',
  'screen_name',
  'age'
));
