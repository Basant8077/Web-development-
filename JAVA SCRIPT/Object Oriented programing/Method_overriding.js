class employee {

    constructor(name) {
        this.name = name;
        console.log(`${this.name} Employee constructor is here`)

    }

    login() {
        console.log("Employee has logged in...")

    }
    logout() {
        console.log("Employer has logged out...")
    }
    RequestLeave(leave) {
        console.log(`Employer has requested ${leave} leaves`)
    }
}
class programmer extends employee {

    //! default  construcor if no constructor in child class
    // constructor(..arguments){
    //     super(..arguments)
    // }

    constructor(name) {
        super(name)
        this.name = name;
        console.log(`${this.name} programmer constructor is here`)

    }

    getCofee(no) {
        console.log(`Emplyer has requested ${no} Cofee`)
    }

    //*method overwrite

    // RequestLeave(leave){
    //     console.log(`Employer has requested ${leave+1} leaves`)
    // }
    
    RequestLeave(leave) {
        super.RequestLeave(4)
        console.log("One extra is granted")

    }
}

let varun = new programmer("vicky")

// let vicky = new employee()
// vicky.RequestLeave(6)  employ vala request leave will run 

varun.login()
varun.getCofee(1)

varun.RequestLeave(4)
// request leave of programmer will run