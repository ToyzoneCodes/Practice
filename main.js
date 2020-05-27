setInterval(setClock, 1000);

let secsHand = document.getElementById("secs")
let minsHand = document.getElementById("mins")
let hourHand = document.getElementById("hour")

function setClock() {
    const currentDate = new Date();
    let secondsRatio = currentDate.getSeconds() / 60;
    let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minutesRatio + currentDate.getHours()) / 12;
    moveHand(secsHand,secondsRatio);
    moveHand(minsHand,minutesRatio);
    moveHand(hourHand,hourRatio);
}

function moveHand(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio*360);
}

setClock();
