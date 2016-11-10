<?php

class Robot
{
  private $name = '';
  private $color;

  public static function createRedRobot($name)
  {
    return new self($name, 'red');
  }

  public static function createBlueRobot($name)
  {
    return new self($name, 'blue');
  }

  private function __construct($name, $color)
  {
    $this->setName($name);
    $this->color = $color;
  }

  public function setName($name)
  {
    $this->name = (string)filter_var($name);
  }

  public function getName()
  {
    return $this->name;
  }

  public function getColor()
  {
    return $this->color;
  }
}


$a = Robot::createRedRobot('ロボ太郎');
echo $a->getName();
echo $a->getColor();
$b = Robot::createBlueRobot('ロボ二郎');
echo $b->getName();
echo $b->getColor();
