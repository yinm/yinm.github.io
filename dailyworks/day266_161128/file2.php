<?php

$filename = 'memo.txt';

$lines = file($filename);

?>

<ul>
    <?php foreach ($lines as $line) : ?>
        <li><?php echo $line; ?></li>
    <?php endforeach; ?>
</ul>
