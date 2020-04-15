const secondsHand = document.querySelector(".second_hand");
const minsHand = document.querySelector(".min_hand");
const hoursHand = document.querySelector(".hour_hand");
const clockContainer = document.querySelector(".clock"), clockTitle = clockContainer.querySelector("h1");

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) +90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) +90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds
    }`; // 여기서 ?는 if 역할을 하고 :는 else 역할을 한다
}

setInterval(setDate, 1000);

function init() {
    getTime();
    setInterval(getTime, 1000);  //인터벌 반복 --> 1(1000)초마다 반복해서 값 불러옴
}

init();