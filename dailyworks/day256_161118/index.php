<?php

require_once './Counter.php';

$counter = new Counter();
$counter->increment();
$cnt = $counter->get();


?>

<html>
<head>
    <title>PHP講座 - トップページ</title>
</head>
<body>
<h1>PHP講座</h1>
<p>あなたは<?php echo $cnt; ?>番目の訪問者です</p>
</body>
</html>
