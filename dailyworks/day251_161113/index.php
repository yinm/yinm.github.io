<?php

class Product
{
    private $name;
    private $productDate;

    public function __construct($name, $productDate)
    {
        $this->name = $name;
        $this->productDate = $productDate;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getProductDate()
    {
        return $this->productDate;
    }
}

$kamaboko = new Product('かまぼこ', '2009/01/01');
$chikuwa = new Product('ちくわ', '2009/01/02');

$kamabokoName = $kamaboko->getName();
$kamabokoDate = $kamaboko->getProductDate();

$chikuwaName = $chikuwa->getName();
$chikuwaDate = $chikuwa->getProductDate();

print $kamabokoName . 'は' . $kamabokoDate . 'に製造されました<br>';
print $chikuwaName . 'は' . $chikuwaDate . 'に製造されました';