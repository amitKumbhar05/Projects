const api_key = '997c11233d4b00bea78a47d69e09c75a';

const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const cityName = document.querySelector('.city')
const searchBar = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const icon = document.querySelector('.weather-icon')
const weather = document.querySelector('.weather')
const error = document.querySelector('.error')
weather.style.display = 'none';
error.style.display = 'none';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&units=metric`

const checkWeather = async (city) => {
    const res = await fetch(apiUrl+`&q=${city}`);
    const data = await res.json();

    if(res.status==404)
    {
        error.style.display = 'block';
        weather.style.display = 'none';
    }
    else
    {
        temp.innerText = Math.round(data.main.temp) +'°C'
        humidity.innerText = data.main.humidity +'%';
        wind.innerText = data.wind.speed + ' km/h'
        cityName.innerText = data.name
        error.style.display = 'none';
        weather.style.display='block'
    
        if(data.weather[0].main == "Clouds")
        {
            icon.src='images/clouds.png';
        }
        if(data.weather[0].main == "Rain")
        {
            icon.src='images/rain.png';
        }
        if(data.weather[0].main == "Drizzle")
        {
            icon.src='images/drizzle.png';
        }
        if(data.weather[0].main == "Mist")
        {
            icon.src='images/mist.png';
        }
        if(data.weather[0].main == "Clear")
        {
            icon.src='images/clear.png';
        }

    }



}

searchBar.addEventListener('keydown',(e)=>{
    if(e.key==='Enter')
    {
        checkWeather(searchBar.value)
    }
})

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBar.value)
})