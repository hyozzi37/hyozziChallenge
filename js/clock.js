const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0"); //num을 string으로 만드는 법
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minutes}`;
}

getClock(); //1초 안기다리고 바로 시작
setInterval(getClock, 1000);
