
{  //block scope
    let a = 10;
}
console.log(a)  //* let is a block level scope
let p = 10 //global scope
function sum(){ //function scope
    let a = 7;
    console.log(p)
    console.log(a)
}
sum()
console.log(p)
console.log(s) //not defined

