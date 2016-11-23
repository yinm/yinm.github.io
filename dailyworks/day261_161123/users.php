<?php

/**
 * @param $resultArray
 *
 * @param array resultArrayの返却値
 * @return string jsonで表現されたレスポンス
 */
function returnJson($resultArray)
{
    if (array_key_exists('callback', $_GET)) {
        $json = $_GET['calback'] . "(" . json_encode($resultArray) . ")";
    } else {
        $json = json_encode($resultArray);
    }
    header('Content-Type: text/html; charset=utf-8');
    echo $json;
    exit(0);
}

// --------------------------------------------
// 処理の開始
// --------------------------------------------
$type = $_REQUEST['user_type'];

$user_list = [];
$result = [];

try {
    // 値の検証
    if (empty($type)) {
        throw new RuntimeException("no type...");
    }

    // ユーザリストの作成
    switch ($type) {
        case 'a':
        case 'admin':
            $user_list = [
                ['name' => '中居', 'age' => 18]
            ];
            break;
        case 'o':
        case 'operator':
            $user_list = [
                ['name' => '木村', 'age' => 17],
                ['name' => '森', 'age' => 16]
            ];
            break;
        case 'g':
        case 'guest':
            $user_list = [
                ['name' => '香取', 'age' => 14],
                ['name' => '草薙', 'age' => 15],
                ['name' => '稲垣', 'age' => 15],
                ['name' => '岡田', 'age' => 15],
                ['name' => '森田', 'age' => 15],
                ['name' => '三宅', 'age' => 15],
                ['name' => '長野', 'age' => 15],
                ['name' => '坂本', 'age' => 15],
                ['name' => '井ノ原', 'age' => 15]
            ];
            break;
        case 'e':
        case 'empty':
            $user_list = [];
            break;
        default:
            throw new RuntimeException("Invalid value...");
            break;
    }

    if (empty($user_list)) {
        header('HTTP/1.1 404 Not Found');
        exit(0);
    }

    $result = [
        'users' => $user_list
    ];
    returnJson($result);

} catch (RuntimeException $e) {
    header('HTTP/1.1 400 Bad Reques');
    exit(0);
} catch (Exception $e) {
    header('HTTP/1.1 500 Internal Server Error');
    exit(0);
}

