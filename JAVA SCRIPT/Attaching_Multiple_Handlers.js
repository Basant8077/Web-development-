
let p = new Promise((resolve, reject) => {

    console.log("Promice is not resolved")

    setTimeout(()=>{
        resolve(7)
    },2000)
})

//* Multiple handles they will run independently
p.then((value)=>{
    console.log("Promice is resolved with value " + value)
})

p.then((value)=>{
    console.log("Hurrey what a delightfull day")
    console.log(value) //it will give value 7
})
p.then((value)=>{
    console.log("This is third handled promise")
    console.log(value); //value 7
})