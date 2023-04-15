message = "good global"

function hello1() {
    let message = "good morning"

    console.log(` Hello 1 ${message} `)

    let c = function hello2() {
        // let message = "Hello2 "
        console.log(`I am c ${message}`)
    }
    return c;
}
//function along with its lexical environment is returned
let c = hello1()
c()

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    //name = "vicky"  //! vicky  will return in name 
    return displayName;
}
let v = init();
v()
//! NOTE:- the refrence of the variable is returning not its value hence if the value is changed it will change

//!    NESTED FUNCTION
function returnfunc() {
    let x = () => {

        let a = 1;
        console.log(a)
        let y = () => {
            // let a = 2
            console.log(a)

            let z = () => {
                // let a = 3
                console.log(a)
            }
            z()
        }
        a =99  // if a is not in y,y will then look for a into its lexical parent and at the end it will look in global 
        y()
    }
    return x;
}
let a = returnfunc()
a()