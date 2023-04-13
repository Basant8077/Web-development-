//html load page on fetch api
const createtodo = async (todo) => {
    let option = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(todo) //convert valid javascript into a string
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', option)

    let response = await p.json()
    return response
}

const gettodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1'+ id)
    let r = await response.json()
    return r
}
const mainfunc = async () => {
    let todo = {  //* object
        title: 'Vicky',
        body: 'joshi',
        userId: 07,
    }
    let todor = await createtodo(todo)
    console.log(todor)
    console.log(await gettodo(101))
}
mainfunc()
