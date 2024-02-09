const numberHours = document.querySelector(".number-hours");
const bar_seconds = document.querySelector(".bar-seconds");
const numberElement = [];
const barElement = [];

for (let i = 1; i <= 12; i++) {
  numberElement.push(
    ` <span style="--index:${i};">
      <p>${i}</p>
    </span>`
  );
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

for (let i = 1; i <= 60; i++) {
  barElement.push(
    ` <span style="--index:${i};">
          <p></p>
        </span>`
  );
}
bar_seconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

function getcurrentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  handHours.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
  handMinutes.style.transform = `rotate(${minutes * 6}deg)`;
  handSeconds.style.transform = `rotate(${seconds * 6}deg)`;
}
getcurrentTime();
setInterval(getcurrentTime, 1000);
