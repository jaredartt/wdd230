const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=2519513&units=metric&appid=2c547c91d1c676128d67532b787be57b";

fetch(apiURL)
  .then((response) => response.json())
  .then((x) => {
    // console.log(x);

    const currentTemp = document.querySelector('#current-temp');
    const weathericon = document.querySelector('#weathericon');
    const caption = document.querySelector('figcaption');

    currentTemp.textContent = x.main.temp.toFixed(0);
    let imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
    let imgalt = x.weather[0].description;
    imgalt = imgalt.split(' ').map(capitalize).join(' ');

    currentTemp.textContent = x.main.temp.toFixed(0);
    weathericon.setAttribute('src', imgsrc);
    weathericon.setAttribute('alt', imgalt);
    caption.innerHTML = imgalt;
  });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}