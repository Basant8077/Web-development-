let title = document.getElementById("title")
let desc = document.getElementById("desc")
let todo = document.getElementById("todo")

let submit = document.getElementById("submit")

let data1= title.value

submit.addEventListener("click", (e) => {
    e.preventDefault();

    let data1 = title.value
    let data2 = desc.value

    localStorage.setItem(`${data1}`,`${data2}`)
    // localStorage.setItem("todo", JSON.stringify([data1, data2]))
    let div = document.createElement("div")
    div.classList="container"
    div.innerHTML= `<h1>${data1}</h1>
                    <p>${data2}</p>`

    todo.prepend(div)

    title.value=""
    desc.value=""

})

let del = document.getElementById("del")

del.addEventListener("click", (e) => {
    e.preventDefault()
    //    console.log( localStorage.getItem(""))
    let key = localStorage.key(0)
    localStorage.removeItem(`${key}`)
    todo.innerHTML = ""
})




