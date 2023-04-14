class Animal {
    constructor(name) {
        this._name = name;
    }
    fly() {
        console.log(`${this.name} is flying....`)

    }

    get name() {
        return this._name;
    }
    set name(newname) {
        this._name = newname;
    }
}
class dog extends Animal {
    eat() {
        console.log("I am eating")
    }
}
let a = new dog("Hey");
let c = null
a.fly()
console.log(a.name)
a.name = "vicky"
console.log(a.name)
console.log(a instanceof Animal)
console.log(a instanceof dog)
console.log(c instanceof Animal)