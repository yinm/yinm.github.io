<?php

class SingletonSample
{
  private static $instance;

  private function __construct()
  {
  }

  public static function getInstance()
  {
    if (self::$instance == null)
    {
      self::$instance == new self();
    }
    return self::$instance;
  }
}

$ins1 = SingletonSample::getInstance();
$ins2 = SingletonSample::getInstance();

if ($ins1 === $ins2)
{
  echo "同一インスタンスです";
}
else
{
  echo "違うインスタンスです";
}
