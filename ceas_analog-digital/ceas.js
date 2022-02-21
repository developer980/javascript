const hourTXT = document.querySelector("#hours");
const minTXT = document.querySelector("#mins");
const secTXT = document.querySelector("#sec");
const sPointer = document.querySelector("#sPointer");
const mPointer = document.querySelector("#mPointer");
const hPointer = document.querySelector("#hPointer");
const button = document.querySelector(".switch");
const digital = document.querySelector("#digital");
const watch = document.querySelector("#watch");

let hour = 0;
let min = 0;
let sec = 0;
let analog = false;

const date = new Date();

hour = date.getHours();
min = date.getMinutes();
sec = date.getSeconds();

//hour = 0;
//min = 0;
//sec = 0;
s_angle = 0;
m_angle = date.getMinutes() * 6;
h_angle = date.getHours() * 30;
sPointer.style.transform = `rotate(${s_angle}deg)`;
mPointer.style.transform = `rotate(${m_angle}deg)`;
hPointer.style.transform = `rotate(${h_angle}deg)`;
setInterval(update, 1000);

function update() {
  /*  s_angle = date.getSeconds() * 6;
  m_angle = date.getMinutes() * 6;
  h_angle = date.getHours() * (30 + 180);
  sPointer.style.transform = `rotate(${s_angle}deg)`;
  mPointer.style.transform = `rotate(${m_angle}deg)`;*/

  sec++;
  //angle += 6;
  if (sec >= 60) {
    sec = 0;
    min++;
  }
  if (min >= 60) {
    hour++;
    min = 0;
  }
  if (hour >= 60) {
    hour = 0;
  }
  if (sec < 10) {
    secTXT.innerText = "0" + sec;
  } else {
    secTXT.innerText = sec;
  }

  if (min < 10) {
    minTXT.innerText = "0" + min;
  } else {
    minTXT.innerText = min;
  }

  if (hour < 10) {
    hourTXT.innerText = "0" + hour;
  } else {
    hourTXT.innerText = hour;
  }
  sPointer.style.transform = `rotate(${(s_angle += 6)}deg)`;
  if (s_angle == 360) {
    mPointer.style.transform = `rotate(${(m_angle += 6)}deg)`;
    s_angle = 0;
  }
  if (m_angle == 360) {
    hPointer.style.transform = `rotate(${(h_angle += 30)}deg)`;
    m_angle = 0;
  }
}
button.addEventListener("click", function () {
  if (analog == false) {
    watch.style.display = "block";
    digital.style.display = "none";
    analog = true;
    button.innerText = "Switch to digital";
  } else {
    watch.style.display = "none";
    digital.style.display = "block";
    analog = false;
    button.innerText = "Switch to analog";
  }
});
