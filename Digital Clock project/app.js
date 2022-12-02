


setInterval(time, 1000);
function time(){
    let dateInfo = new Date();

let hour = dateInfo.getHours();
let min = dateInfo.getMinutes();
let sec = dateInfo.getSeconds();
let millisec = dateInfo.getMilliseconds();

    document.getElementById("hr").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("nanosec").innerHTML = millisec;
}
time();



