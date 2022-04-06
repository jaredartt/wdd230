const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.984653&lon=-77.094711&units=metric&exclude=hourly,daily&appid=5cf63a4bdc5ca489d66c3e2841dc832b"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
});

const currentHumidity = document.getElementById("current-humidity");
let humidityVar = data.lat;

currentHumidity.innerHTML = `${humidityVar}`;

function showweatherData (data){

}