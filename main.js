function updateTime() {
  const time = new Date();
  const currentTime = document.getElementById("time");

  let currentHour = time.getHours();
  let currentMinute = time.getMinutes();
  let currentSecond = time.getSeconds();

  let currentHourString = currentHour;
  let currentMinutestring = currentMinute;
  let currentSecondString = currentSecond;
  if (currentHour < 10) {
    currentHourString = "0" + currentHour;
  }
  if (currentMinute < 10) {
    currentMinutestring = "0" + currentMinute;
  }
  if (currentSecond < 10) {
    currentSecondString = "0" + currentSecond;
  }
  const formatted_time =
    currentHourString + ":" + currentMinutestring + ":" + currentSecondString;
  currentTime.innerHTML = formatted_time;
}
updateTime();
setInterval(updateTime, 1000);

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

var timer;

function start() {
  timer = true;
  stopWatch();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("milisec").innerHTML = "00";
}

function stopWatch() {
  if (timer == true) {
    millisecond++;

    if (millisecond == 100) {
      second = second + 1;
      millisecond = 0;
    }
    if (second == 60) {
      minute = minute + 1;
      second = 0;
    }
    if (minute == 60) {
      hour = hour + 1;
      minute = 0;
    }

    let hourString = hour;
    let minuteString = minute;
    let secondString = second;
    let millisecondString = millisecond;

    if (hour < 10) {
      hourString = "0" + hourString;
    }
    if (minute < 10) {
      minuteString = "0" + minuteString;
    }
    if (second < 10) {
      secondString = "0" + secondString;
    }
    if (millisecond < 10) {
      millisecondString = "0" + millisecondString;
    }

    document.getElementById("milisec").innerHTML = millisecondString;
    document.getElementById("sec").innerHTML = secondString;
    document.getElementById("min").innerHTML = minuteString;
    document.getElementById("hr").innerHTML = hourString;
    setTimeout("stopWatch()", 10);
  }
}