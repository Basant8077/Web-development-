class Animal{
    constructor(name){
        this.name= Animal.capatilizie(name);
    }
    walk(){
        console.log(`${this.name} is walking`)

    }
    static capatilizie(name){
        return (name.charAt(0).toUpperCase() + name.substr(1,name.length))

    }

}
let first = new Animal("jakeey")
first.walk()