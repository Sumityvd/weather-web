const submitButton = document.getElementById('submit');
const cityvalue = document.getElementById('cityname');
const cityName = document.getElementById('city');
const card = document.querySelector('.result');
let SKY = document.getElementById('sky');
let TEMP = document.getElementById('temp');
let WIND = document.getElementById('wind');



function getWeatherByLocation() {
  API = 'ba992c0faa5778ae3a698ed8fffa6c79';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue.value}&appid=${API}`)

      .then(
          res => res.json()
      )
      .then(data => {
          console.log(data);
          console.log(data.main.humidity)
          if (cityvalue.value === "") {
              alert("Please enter a city name");
              return
          }
          else {
              city.innerHTML = data.name;
              // HUMIDITY.innerHTML ="Humidity: "+data.main.humidity;
              TEMP.innerHTML = "Temperature:" + Math.round(data.main.temp - 273.15 )+"°C";
              WIND.innerHTML = data.wind.deg;
              WIND.innerHTML ="Wind Speed:" +data.wind.speed+"km/hr";
              SKY.innerHTML = data.weather[0].main;

              
          }
        })
        
}
submitButton.addEventListener('click', getWeatherByLocation);
cityvalue.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeatherByLocation();
    }
    });


