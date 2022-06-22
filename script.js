function CoffeeMake(){
    console.log(`CoffeeMake`)
}
CoffeeMake.prototype.on=function(){
    console.log(`on`)
}
CoffeeMake.prototype.of=function(){
    console.log(`of`)
}

function FirstTipe(){
    CoffeeMake.call(this)
    console.log(`FirstTipe`)
}

FirstTipe.prototype = Object.create(CoffeeMake.prototype);
FirstTipe.prototype.constuctor = FirstTipe;

FirstTipe.prototype.espresso=function(){
    console.log(`espresso`)
}

function SecondTipe(){
    CoffeeMake.call(this)
    console.log(`SecondTipeipe`)
}

SecondTipe.prototype = Object.create(CoffeeMake.prototype);
SecondTipe.prototype.constuctor = SecondTipe;

SecondTipe.prototype.americano=function(){
    console.log(`americano`)
}
function ThreeTipe(){
    CoffeeMake.call(this)
    console.log(`ThreeTipe`)
}

ThreeTipe.prototype = Object.create(CoffeeMake.prototype);
ThreeTipe.prototype.constuctor = ThreeTipe;

ThreeTipe.prototype.late=function(){
    console.log(`late`)
}


let firstTipe = new FirstTipe();
firstTipe.on()
firstTipe.espresso()
firstTipe.of()

let secondTipe = new SecondTipe();
secondTipe.on()
secondTipe.americano()
secondTipe.of()

let threeTipe=new ThreeTipe();
threeTipe.on()
threeTipe.late()
threeTipe.of()