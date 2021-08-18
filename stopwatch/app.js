const miliseconds = document.getElementById('miliseconds');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const totalTime = document.getElementById('total-time');
const lapRecords = document.getElementById('lap-records');


const startButton = document.getElementById('button-start');
let interval;
// 1000ms -> 1 sec --- 
startButton.addEventListener('click', () => {
    interval = setInterval(updateTime,1);
});

const updateTime = () => {
    milisecondsNo = parseInt(miliseconds.innerText);
    secondsNo = parseInt(seconds.innerText);
    minutesNo = parseInt(minutes.innerText);

    // console.log(milisecondsNo,++milisecondsNo);

    if(milisecondsNo<100){
        miliseconds.innerText=++milisecondsNo;
    }
    if(milisecondsNo==100){
        miliseconds.innerText=00;
        seconds.innerText=++secondsNo;
    }
    if(secondsNo==60){
        seconds.innerText=00;
        minutes.innerText=++minutesNo;
    }
}

let lapCount = 0;
// for showing lap times 
document.getElementById('button-lap').addEventListener('click', () => {
    const lapItem = document.createElement('li');
    lapCount++;
    lapItem.setAttribute('id',lapCount);
    lapItem.innerText = `Lap ${lapCount} ${totalTime.innerText}`;
    lapRecords.appendChild(lapItem);
})

// for clearing the stopwatch
document.getElementById('button-clear').addEventListener('click', () => {
    minutes.innerText= "00";
    seconds.innerText = "00";
    miliseconds.innerText = "00";
    // const lap1 = document.getElementById(lapCount.toString());
    // console.log(lap1)
    while(lapCount!=0){
        const lapItem = document.getElementById(lapCount.toString());
        lapItem.remove();
        lapCount--;
    }
    clearInterval(interval);
})