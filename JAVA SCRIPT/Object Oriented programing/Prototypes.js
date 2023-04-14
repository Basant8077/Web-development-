let a = {
    namee: "Vicky",
    language: "Java script",
    run: ()=>{
        alert(" self run") //* first this run will execte
    }
}
console.log(a)
//prototype 
let p = {
    //method
    run: ()=>{
        alert("run")
    }
}
p.__proto__={
    name: "Basant",
}

a.__proto__= p
a.run()
console.log(a.name) 
//first it will go to a then -> a prototype but p not have name then it will go to p protype