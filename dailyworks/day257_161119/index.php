<?php

require_once './Dispatcher.php';

$dispatcher = new Dispatcher();
$dispatcher->setSystemRoot('.');
$dispatcher->dispatch();