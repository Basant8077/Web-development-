//! Question1 
class complex {

    constructor(real, imaginary) {

        this._real = real;
        this._imaginary = imaginary;
    }

    get_number() {
        console.log(`${this.real} + ${this.imaginary} i`)
    }
    add(num) { //num is an object

        this._real = this._real + num._real;
        this._imaginary = this._imaginary + num._imaginary

    }

    get real() {
        return this._real
    }
    get imaginary() {
        return this._imaginary
    }

    set real(num1){
        this._real=num1
    }
    set imaginary(num2)
    {
        this._imaginary=num2
    }
}

//! question2 
let input = new complex()
input.real = 5
input.imaginary = 10
input.get_number()
let input2 = new complex()
input2.real = 7
input2.imaginary = 10
input2.get_number()
input.add(input2)
input.get_number()



class Human{
    constructor(legs,arms,head){
        this.legs=legs
        this.arms=arms
        this.head=head
    }
    run(){
        console.log("Human is running")
    }
    
}
class student extends Human{

    //construcor overwrite
    constructor(legs,arms,head,name){
        super(legs,arms,head)
        this.name = name;
    }
    
    //run method overwrite
    run(){
        super.run()
        console.log("Human is called " + this.name)
    }
    get name(){
        return this._name
    }
    set name(newname){
        this._name=newname

    }
}

// let a = new Human()
let a = new student()
a.name="Basant"
a.run()
console.log(a instanceof Human) //true

