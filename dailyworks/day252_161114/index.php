<?php

class Product
{
    private $price;

    public function __construct($price)
    {
        if (false == $this->checkPrice($price)) {
            throw new Exception('価格の設定値が不正です');
        }
        $this->price = $price;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function adjustPrice($price)
    {
        if (false == $this->checkPrice($price)) {
            throw new Exception('価格の設定値が不正です');
        }
        $this->price += $price;
    }

    private function checkPrice($count)
    {
        if (false == is_numeric($count)) {
            return false;
        }
        return true;
    }
}

try {
    $prd = new Product(100);
    echo $prd->getPrice() . '円です。<br>';

    $prd->adjustPrice(200);
    echo $prd->getPrice() . '円です。<br>';

    $prd2 = new Product('あああ');
    echo $prd2->getPrice() . '円です<br>';

    $prd2->adjustPrice('いいい');
    echo $prd2->getPrice() . '円です<br>';
} catch(Exception $e) {
    echo $e->getMessage();
}