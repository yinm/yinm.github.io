<?php

$flatten = function($array) use(&$flatten)
{
    $result = array();

    foreach ($array as $value) {
        if (is_array($value)) {

            // 挙動確認
            echo '実行前だよ';
            var_dump($result);

            $result = array_merge($result, $flatten($value));

            // 挙動確認
            echo '実行後：';
            var_dump($result);

        } else {
            $result[] = $value;
        }
    }

    return $result;
};

$array = array(1, 5, array(3, array(22, 5)), 12);

$result = $flatten($array);

echo join(', ', $result);