alert ("I am linked");

//Starter name Question
//Variables and arrays
var name = prompt ("What is your name?");  
var mPrice = 40;
var sPrice = 10;
var flavor ;
var sprinkles ;
var nameList = [                   
    'Creamy Master','Ice Delight','Fruity Jack','Foam Queen',
    'Smoothie Baby','Smooth Move'
  ];

//Main function for the milkshake and random generated name
function Validate(){
     flavor = document.getElementById("flavor").value;
     sprinkles = document.getElementById("sprinkles").value;

     if (sprinkles == "Yes"){
        document.getElementById("sprinklesP").innerHTML = "With sprinkles";   //Sprinkle question
        sPrice = 10;
    }
    
    document.getElementById("nameP").innerHTML = "Hi, " + name;   // Name question
    document.getElementById("flavorP").innerHTML = "Your flavour is " + flavor;  //Flavor question
    
    function totalPrice(){  // Milkshake price calculation and total return
        var x = mPrice + sPrice;
        return x;
    }

    var randomInt = Math.floor(Math.random() * 7);  // Random name generator
    
    document.getElementById("totalP").innerHTML = "Your Order " + nameList[randomInt] + " Your Total = R" +totalPrice();

     alert ("Would you like to see your order?");  //Second question of order
}

