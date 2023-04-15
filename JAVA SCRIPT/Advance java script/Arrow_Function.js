// const sayhello= name => console.log("Hello "+name)
const sayhello = (name, greet) => console.log("Hello " + name + greet)
sayhello("vicky", "good morning")
const x = {
    name: "vicky",
    role: "js developer",
    experinse: 30,
    Show: function () {
        // let that = this
        // console.log(this)
        // setTimeout(function(){
        //     console.log(`The name is ${that.name} \n The Role is ${that.role}`)
        // }, 3000);
        setTimeout(()=>{
            console.log(`The name is ${this.name} \n The Role is ${this.role}`)
        }, 3000);
    }
}
console.log(x.name, x.experinse)
x.Show()