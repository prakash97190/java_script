// const value=document.getElementById("clock");
function updateclock(){
    let now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    hours=hours<10 ? "0" +hours :hours;
    minutes=minutes<10 ? "0"+minutes:minutes;
    seconds=seconds<10 ? "0" +seconds :seconds;
    document.getElementById("clock").innerText =
        hours + ":" + minutes + ":" + seconds

}
setInterval(updateclock,1000);
updateclock();

// const value=document.getElementById("date");
function date() {
    let now = new Date();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    let dayName = days[now.getDay()];
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    date = date < 10 ? "0" + date : date;
    month = month < 10 ? "0" + month : month;
    document.getElementById("date").innerText =
       dayName + "   " + date+ "-" + month+"-"+year;

}
date();
