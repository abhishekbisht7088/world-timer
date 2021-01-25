//need end date and current date and then subtract


const newYears = "1 Jan 2022";

const dayVar = document.getElementById("days");
const hrVar = document.getElementById("hours");
const minVar = document.getElementById("mins");
const secVar = document.getElementById("seconds");

function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();

        //TotalSeconds
        const totalSeconds = Math.floor((newYearsDate - currentDate)/1000);

        //seconds
        const seconds = totalSeconds%60;

        //mins
        const mins = Math.floor((totalSeconds/60)%60);

        //hours
        const hours = Math.floor(totalSeconds/(60*60)%24);

        //days
        const days = Math.floor(totalSeconds/(60*60*24));

        //console.log(days,hours,mins,seconds);

        dayVar.innerHTML = days;
        hrVar.innerHTML  = hours;
        minVar.innerHTML  = mins;
        secVar.innerHTML  = seconds;
}

countdown();

setInterval(countdown, 1000);