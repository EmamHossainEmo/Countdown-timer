const nextYearEl = document.getElementById("next-year");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

nextYear = String(new Date().getFullYear() + 1);
let newYear = "1 Jan " + nextYear;

function countdown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

  const days = Math.floor(totalSeconds / 86400);

  const hours = Math.floor((totalSeconds % 86400) / 3600);

  const mins = Math.floor(((totalSeconds % 86400) % 3600) / 60);

  const seconds = Math.floor(((totalSeconds % 86400) % 3600) % 60);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  nextYearEl.innerHTML = nextYear;
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

countdown();

setInterval(countdown, 1000);
