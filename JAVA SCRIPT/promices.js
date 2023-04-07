let promise = new Promise((resolve, reject) => {
    console.log('hello')
    resolve(10)
});

console.log("Hello 1")

setTimeout(function(){
    console.log("hello after 2 sec")
},2000)

console.log("This is hello " + "hello 3")
console.log(promise)