function GetInfo() {
  fetch("api.openweathermap.org/data/2.5/forecast?=bethesda&appid=12149d489a9af7552a5b8d76a9f4e119")
  .then(responde => response.json())
  .then(data => {
    for(i=0;i<3;i++) {
      document.getElementById("day" + (i+1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp - 288.53).toFixed(1) + "º";
    }
    for(i=0;i<3;i++) {
      document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn" + data.list[i].weather[0].icon + ".png";
    }
  })
}

GetInfo()

const d = new Date();
const weekday = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday"];

function CheckDay(day) {
  if(day + d.getDay() > 6) {
    return day + d.getDay() -7;
  }
  else {
    return day + d.getDay();
  }
}

for(i=0;i<3;i++) {
      document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }