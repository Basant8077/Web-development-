document.write("Hello")

let sum = (a,b)=>{
    console.log("The is sum ",(a+b))
}
console.log(setTimeout(sum,5000,1,3))
//!  setTimeout< function , delay , arg1 ,arg 2 >


let a =setTimeout(function(){
    document.write("This is inside set time out")
},5000)

// setInterval(function(){

//     alert("Set intervel")
// },2000)

// let b = prompt("Do you want to run set timeout?")
// if(b=='n'){
//     clearTimeout(a)
// }
// console.log(a) //*timer id
// // clearTimeout(a) //*stoping execution of above set timeout