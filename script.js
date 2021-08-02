let digitalElement = document.querySelector('.digital');
let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //digital clock
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    //analog clock
    let secondDeg = ((360 / 60) * second) -90;
    let minuteDeg = ((360 / 60) * minute) -90;
    let hourDeg = ((360 / 12) * hour) -90;

    secondElement.style.transform = `rotate(${secondDeg}deg)`;
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
    hourElement.style.transform = `rotate(${hourDeg}deg)`;

}

//fix clock
function fixZero(time) {
    return time < 10 ? `0${time}` : time;
    //if (time < 10) {
        //return '0'+time;
    //} else {
        //return time;
    //}
}

setInterval(updateClock, 1000); //update every second
updateClock();