let arr = [10, 20, 30, 40, 50, 60]

// let [x, , y, ...rest] = arr
// console.log(x, y, rest)

// let [x,,...rest]=arr
// console.log(x,rest)

let {x,y} ={x:0 , y: 6}
console.log(x,y)

//spread syntex
//* array to object 
let arr2 = [10,2,34,534,54]
let obj = {...arr2}

console.log(obj)

function sum(a,b,c){
    return a+b+c
}
console.log(sum(...arr2))

let obj2 = {
    name: "vicky",
    company: "international",
    transation: "rupee"
}

console.log({...obj2 , name: "Basant" , company : "national"} )