<?php

function outputUser($user) {
  if(isset($user['user_id']))
    echo "ID:{$user[user_id]}\n";
  if(isset($user['screen_name']))
    echo "Screen name:{$user[screen_name]}\n";
  if(isset($user['age']))
    echo "Age: {$user[age]}\n";
}

$user_id = 1;
$screen_name = 'yinm';
$age = 27;

outputUser(compact(
  'user_id',
  'screen_name',
  'age'
));
