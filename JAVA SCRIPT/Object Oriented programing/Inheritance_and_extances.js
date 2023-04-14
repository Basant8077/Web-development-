class Animal{
    
    //constructor 
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    // method 1
    run(){
        console.log(this.name + " is running having color " + this.color )
    }
    //method 2
    bark(){
        console.log(this.name + " is barking having a beutifull " + this.color + " color")
    }
}
class Monkey extends Animal {

    eatbanana(){
        console.log(`${this.name} is eating banana`)
    }
}

let Dog = new Animal("Jackey","brown")
let Monkeey = new Monkey("BANAR","brown")
Dog.run()
Dog.bark()
// Dog.eatbanana()  this will throw an error

Monkeey.run()
Monkeey.eatbanana()
