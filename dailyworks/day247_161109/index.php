<?php

function Action($url) {
  $title = $url;
  $caption = $url . 'のページ';
  $text = 'これは' . $url . 'のページです';
  return compact('title', 'caption', 'text');
}

function View($params) {
  extract($params);
  include('./layout.php');
}

View(Action($_GET['url']));
