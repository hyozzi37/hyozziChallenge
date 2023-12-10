const API_KEY = "4830fbb45cd392b58a7c2070be4e03d3";

function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather p:first-child");
      const city = document.querySelector("#weather p:last-child");

      weather.innerText = `${data.weather[0].main}  ${Math.round(
        data.main.temp
      )}°C`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert(
    "당신의 위치를 찾을 수 없습니다. 날씨를 알려줄 수 없어요. (인타넷 환경을 확인해 주세요 🤔)"
  );
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//sucess 와 erorr를 함께 불러줘야 함
