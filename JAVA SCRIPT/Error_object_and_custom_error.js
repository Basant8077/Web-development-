try {
    console.log(vicky)
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
    // console.log(joshi) //! error
}

//? console.log("Hey") 
//it will not tun since there is error in catch so to tackel this situation we use finally it will run irrespective of the error

finally{

    console.log("Hey i am waiting")
}

// CUSTOM ERROR
try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)

    if(age>100){
        throw new ReferenceError("This is not true (Custom error)")
    }

} catch (error) {
    console.log(error.name)
    console.log(error.message)
}
console.log("The script is still running")