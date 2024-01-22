
//base url of weather map
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

//apiKey generated from api website
let apikey = "a13a50dcbb5edf55119513ce245db537";
const form = document.querySelector("form");

const image = document.querySelector("#weather_image");

const temperature = document.querySelector("h2");
const cityname = document.querySelector("#cityname"); 

const humidity  = document.querySelector("#humidity_percentage");
const windSpeed = document.querySelector("#wind-speed");

const container = document.querySelector(".container");
const weather = document.querySelector(".weather");

//when click on the search button
form.addEventListener("submit" , async (e)=>{
    
    e.preventDefault();

    //extract the searched item
    let searchItem = document.querySelector("input");
    let city = searchItem.value.trim();
    //reset the form to original position
    form.reset();

    //edit url as per the req
    let url =`${BASE_URL}?q=${city.toLowerCase()}&appid=${apikey}&units=metric`

    //fetch request - returns promise
    let response = await fetch(url);
    let data = await response.json();
    
    temperature.innerText = `${Math.round(data.main.temp)}°c`;
    cityname.innerText = `${data.name}`

    humidity.innerText = `${data.main.humidity}%`
    windSpeed.innerText = `${data.wind.speed}km/h`
    let weather = data.weather[0].main.toLowerCase();

    //change the weather logo
    if(weather == "clear"){
        image.src = "./asset/images/clear.png"
    }else if(weather == "clouds"){
        image.src = "./asset/images/clouds.png"
    }else if(weather == "drizzle"){
        image.src = "./asset/images/drizzle.png"
    }else if(weather == "rain"){
        image.src = "./asset/images/rain.png"
    }else if(weather == "snow"){
        image.src = "./asset/images/snow.png"
    }else if(weather == "mist"){
        image.src = "./asset/images/mist.png"
    }else {
        image.src = "./asset/images/clear.png"
    }
})