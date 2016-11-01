<?php

class User {
  public $name;
  public static $count = 0;

  public function __construct($name) {
    $this->name = $name;
    self::$count++;
  }
  public function sayHi() {
    echo "hi, i am $this->name!";
  }
  public static function getMessage() {
    echo "hello from User class!";
  }
}

User::getMessage();

$tom = new User("Tom");
$bob = new User("Bob");

echo User::$count;
