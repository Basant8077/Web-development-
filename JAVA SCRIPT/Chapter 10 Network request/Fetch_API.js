let Option ={
    //* option is an object
    headers: {
        "content-type": "application/json"
}
}
let p = fetch(" API url" , Option)


p.then((Response) => {
    console.log(Response.status)
    console.log(Response.ok)
    console.log(Response.headers)

    return Response.json
    // return request.text  only one at  a time

}).then((value) => {
     console.log(value)
})