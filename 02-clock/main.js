const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');


function setDate(){
    const now = new Date();
    const seconds =  now.getSeconds();
    const minutes =  now.getMinutes();
    const hours =  now.getMinutes();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    const hourDegrees = ((minutes / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(now);

}

setInterval(setDate, 1000)