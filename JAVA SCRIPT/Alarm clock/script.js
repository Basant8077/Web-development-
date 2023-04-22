
function playSound() {
    let ding = new Audio('alarm_01.mp3');
    ding.play();
}

setInterval(() => {
    let time = document.getElementById("time")
    let a = new Date()
    let val = a.toTimeString();
    time.innerHTML = `<h1>${val}</h1>`
}, 1000)




let id = document.getElementById("btn")

id.addEventListener("click", (e) => {

    let input = document.getElementById("id1")
    let a = input.value;
    let t_m= (a[0]+a[1]);
    let t_s= (a[3]+a[4]);
    let ans = ((a[0] + a[1]) * 60) + ((a[3] + a[4]))
    //in minute
    ans = Number.parseInt(ans);

    let status = document.getElementById("status")
    status.innerHTML=`The alarm will set for ${t_m} minutes and ${t_s} seconds`
    console.log()

    setTimeout(() => {
        playSound();
    }, ans * 1000)
})

// setInterval(()=>{
//     let current_time = new Date().toTimeString();
//     let input = document.getElementById("id1")
//     let a1 = input.value;
//     let input_time = ((a[0] + a[1]) * 60) + ((a[3] + a[4]))
//     //in minute
//     ans = Number.parseInt(ans);

//     let second_left= newd

// })
