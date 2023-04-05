
// let firstid = document.getElementById("first")

// firstid.insertAdjacentHTML("afterbegin","This is after begain of div")

// firstid.insertAdjacentHTML("beforebegin" , "<h1> this is before beagain/h1>")
// firstid.insertAdjacentHTML("beforeend", "this is beforeend")
// firstid.insertAdjacentHTML("afterend", "this is afterend")

// // firstid.remove(); //! remove node

let first = document.getElementById("first")

// first.className = "cyan text"
console.log(first.classList)
console.log(first.classList.remove("red","text"))
// first.className = "cyan"
first.classList.add("red")

first.classList.toggle("cyan")
// first.classList.toggle("cyan")
console.log(first.classList.contains("cyan"))
