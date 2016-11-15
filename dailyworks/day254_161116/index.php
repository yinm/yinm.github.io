<?php

interface IProduct
{
    public function applyPriceDown();

    public function getPrice();
}

class Vegetable implements IProduct
{
    private $price = 1000;

    public function applyPriceDown()
    {
        $this->price = $this->price * 0.7;
    }

    public function getPrice()
    {
        return $this->price;
    }
}

class Meet implements IProduct
{
    private $price = 2000;

    public function applyPriceDown()
    {
        if (date('d') == '29') {
            $this->price = $this->price / 2;
        }
    }

    public function getPrice()
    {
        return $this->price;
    }
}

class FreezedFood implements IProduct
{
    private $price = 500;

    public function applyPriceDown()
    {

    }

    public function getPrice()
    {
        return $this->price;
    }
}

class Cart
{
    private $products = array();

    public function addProduct($product)
    {
        $product->applyPriceDown();
        $this->products[] = $product;
    }

    public function getTotalPrice()
    {
        $total = 0;
        foreach ($this->products as $product) {
            $total += $product->getPrice();
        }
        return $total;
    }
}


$cart = new Cart();

$meet = new Meet();
$vegetable = new Vegetable();
$freezed = new FreezedFood();

$cart->addProduct($meet);
$cart->addProduct($vegetable);
$cart->addProduct($freezed);

$total = $cart->getTotalPrice();

var_dump($total);
