//* chapter array 
//! question 1
// let arr=[1,2,3,4,5,6,7]
// let a= prompt("Enter a number: ");
// a= Number.parseInt(a)
// arr.push(a)
// console.log(arr)

//* Question 02
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let a;
// do {
//     a = prompt("Enter a number: ");
//     a = Number.parseInt(a)
//     arr.push(a)
// }while (a != 0);
// console.log(arr)
//!Question 3
// let arr=[1,2,100,30,56,80,10]
//  let result = arr.filter((value)=>{
//     return value%10==0
// })
// console.log(result)
//!question 04

//todo it will not work if you use filter because map resturns new array by performing operation on each array element.

// let arr=[1,2,100,30,56,80,10]
//  let result = arr.map((value)=>{
//     return (value*value)
// })
// console.log(result)
//!Question 05

// let arr=[1,2,3,4,5,6,7]
// let result=arr.reduce((value1,value2)=>{
//     return value1*value2
// })
// console.log(result) 
//!random number generator

//!   Math.random() * (Max-min) + min 
//! Math.floor is use to convert floating point number to a integer 

const random = Math.floor(Math.random()*(10-1) +1)
// console.log(random)
do{
    let a= prompt("Enter a number: ")
a= Number.parseInt(a)
if(a<random){
    console.log('Enter a grater value ');
}
if (a>random){
    console.log("Enter a    lower value")
}
if(a==random){
    console.log("You won!!")
}
}while(a!=random)