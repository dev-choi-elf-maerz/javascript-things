const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const isEmpty = (input) => {
    if (
        typeof input === "undefined" ||
        input === null ||
        input === "" ||
        input === "null" ||
        input.length === 0 ||
        (typeof input === "object" && !Object.keys(input).length)
        )
    {
        return true;
    }
    else return false;
}

function weatherInfor(data) {

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    const weatherImage = document.querySelector(".weatherIcon");
    const weatherCondition = data.weather[0].main;

    switch (weatherCondition) {
        case "Clouds":
            weatherImage.src = "images/clouds.png";
            break;
        case "Clear":
            weatherImage.src = "images/clear.png";
            break;
        case "Clouds":
            weatherImage.src = "images/clouds.png";
            break;
        case "Drizzel":
            weatherImage.src = "images/drizzel.png";
            break;
        case "Mist":
            weatherImage.src = "images/mist.png";
            break;
        case "Drizzel":
            weatherImage.src = "images/drizzel.png";
            break;
    }
}
    
async function checkWeather(city) {

    const APIKEY = 'a6e48eaa2294cfc44017f64ec2439d6d';
    const cityName = city;
        
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric&lang=kr`);

    if (response.status === 404 || response.status === 400) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    } 
    const data = await response.json();
    weatherInfor(data); 
    console.log(data);

}

searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    }
);

// if (isEmpty(searchBox.value)) {
//     checkWeather("tokyo");
// }


