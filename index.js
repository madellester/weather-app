function showCityTemperature(event) {
  document.querySelector("#search-city-input").innerhtml = response.data.name;
  document.querySelector("#degrees").innerhtml = response.data.main.temp;
}

function search(event) {
  event.preventDefault();
  let apiKey = "c7a41370255e0635d2eca1a890a08940";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCityTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let now = new Date();
let currentTime = document.querySelector("#current-time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentTime.innerHTML = `as of ${day} at ${hours}:${minutes}`;

function clickFahrenheit(event) {
  event.preventDefault();
  let fahrenheit = document.querySelector("#fahrenheit-link");
}

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", clickFahrenheit);
