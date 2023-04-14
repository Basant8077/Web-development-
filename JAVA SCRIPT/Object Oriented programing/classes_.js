class railwayform {
    constructor(givenname, trainNO){
        //automatically call by new
        this.name = givenname
        this.trainNO = trainNO
        console.log("Constructor called for "+ givenname +" " + trainNO)
    }
    sumbit() {
        alert(this.name + " Your form is submitted with train number " + this.trainNO)
    }
    cancel() {
        alert(this.name + " Your form is canceled having train number " + this.trainNO)

    }

}

let vickyform = new railwayform("vicky","1234")
// vickyform.fill("vicky", "1234")
vickyform.sumbit()
let basantform = new railwayform("Basant","12345")
// basantform.fill("Basant", "1234")
basantform.sumbit()
let basantform2 = new railwayform("Basant","54321")
// basantform2.fill("Basant", "4321")
basantform2.sumbit()
basantform2.cancel()
