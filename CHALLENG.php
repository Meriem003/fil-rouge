<?php
declare(strict_types=1);
class user{
    private string $name;
    private string $email;
    private Cart $cart;
    private array $order = [];
    public function __construct($name,$email){
        $this->name = $name;
        $this->email = $email;   
    }

    public function addOrder(order $order){
        array_push($this->order, $order);
    }

    public function __get($param){
        return $this->$param;
    }
}

trait pricetotal{
    public function getTotalPrice(){
        $totalprice = 0;
        foreach($this->products as $produit){
            $totalprice += $produit->getTotalPrice();
        }
        return $totalprice;
    }
}

class order{
    use pricetotal;
    private user $user; 
    private array $products = [];
    public function __construct(user $user){
        $this->user = $user;
    }

    public function addprodact(produit $produit){
        $this->products[]=$produit;
    }
}
class produit{
    private string $name;
    private float $price;
    private $reference; 
    public function __construct($reference,$price,$name){
        $this->name = $name;
        $this->reference = $reference;
        $this->price = $price;
    }

    
    public function getprice(){
        return $this->price;
    }
}

class Cart{
    use pricetotal;
    private user $user; 
    private array $products = [];
    public function __construct(user $user){
        $this->user = $user;
    }

    public function addprodact(produit $produit){
        $this->products[]=$produit;
    }
}


$user = new user("meriem","meriem@gmail.com");
$product1 = new produit("1",100,"produit1");
$product2 = new produit("2",100,"produit2");
$product3 = new produit("3",100,"produit3");


$order = new order($user);
$user->addOrder($order);
$order->addprodact($product1);
$order->addprodact($product2);

$order2 = new order($user);
$order2->addprodact($product3);

interface Combattant{
public function attaquer(): int;
public function subirDegats(int $degats): void;
public function estVivant(): bool;

}

abstract class Personnage implements combattant {
    private string $nom;
    private int $vie;
    protected int $force;
    public function __construct($nom, $vie, $force){
        $this->nom = $nom;
        $this->vie = $vie;
        $this->force = $force;
    }
    public function afficherStatut(){
        echo "{$this->nom}";
        echo "{$this->vie}";
        echo "{$this->force}";
    }
    public function subirDegats(int $degats): void{
        $this->vie -= $degats;
        if($this->vie -= $degats){
            
        }

    }
    public function estVivant():bool{

    }
}

class Guerrier extends Personnage{

public function attaquer(): int{
        return $this->force;
    }
}

class mage extends Personnage{

    public function attaquer(): int{
        $degats = (int) ($this->force * 1.5);
        return $degats;
    }
}

