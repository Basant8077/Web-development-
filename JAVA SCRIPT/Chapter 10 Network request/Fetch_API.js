let Option ={
    //* option is an object
    //option is us to post apis without option it fectch act as a get api
    headers: {
        "content-type": "application/json"
}
}
let p = fetch(" API url")


p.then((Response) => {
    console.log(Response.status)
    console.log(Response.ok)
    console.log(Response.headers)

    return Response.json
    // return request.text  only one at  a time

}).then((value) => {
     console.log(value)
})