//! type 2 declaration
// const sum=(a,b)=>{
//     let c=a+b;
//     return c;
// }
// let a=10,b=20;
// let result=sum(a,b);
// console.log(result);
//! type 1 declaration
// function reverse(a,b){
//   let temp=0;
//   temp=a;
//   a=b;
//   b=temp;
//   console.log(a,b);

// }
// let a=10,b=20;
// let result = reverse(a,b);
// console.log(a)
// console.log(b);
//! ques1)
// let marks={
//     rohan:10,
//     kamal:20,
//     vicky:20,
//     basant:25,
// }
// for(let a in marks){
//     console.log("The marks of " + a + " are " + marks[a]);
// }
//!ques 2)
let num=prompt("Enter a number between 1 to 10");
num=Number.parseInt(num);
if (num!=10) {
    alert("TRY AGAIN");
}
else{
    alert("You are right");
}