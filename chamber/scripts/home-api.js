// HTML Selectors for Current Weather
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-img');
const weatherDesc = document.querySelector('#weather-description');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

// HTML Selectors for Weather Forecast
const forecastToday = document.querySelector('#forecast-today');
const forecastTomorrow = document.querySelector('#forecast-tomorrow');
const forecastNext = document.querySelector('#forecast-next');

// Coordinates and API key
const key = 'c3541ee671c135aefd228b58ec7a3d7b';
const lat = 38.722213396962516;
const lon = -9.144627021504363;

// URLs
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;


// Fetch for Current Weather
async function fetchCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log('Current Weather:', data);
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

// Fetch for Weather Forecast
async function fetchWeatherForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log('Forecast Data:', data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
    }
}

// Função para exibir o clima atual
function displayCurrentWeather(data) {
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>°C`;
    highTemp.innerHTML = `<strong>${data.main.temp_max.toFixed(0)}</strong>°`;
    lowTemp.innerHTML = `<strong>${data.main.temp_min.toFixed(0)}</strong>°`;
    humidity.innerHTML = `<strong>${data.main.humidity}</strong>%`;
    weatherDesc.innerHTML = data.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    sunrise.innerHTML = sunriseTime;
    sunset.innerHTML = sunsetTime;
}

// Função para exibir a previsão
function displayForecast(data) {
    const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
    const [today, tomorrow, next] = dailyData;

    forecastToday.innerHTML = `<strong>${today.main.temp.toFixed(0)}</strong>°C`;
    forecastTomorrow.innerHTML = `<strong>${tomorrow.main.temp.toFixed(0)}</strong>°C`;
    forecastNext.innerHTML = `<strong>${next.main.temp.toFixed(0)}</strong>°C`;
}

fetchCurrentWeather();
fetchWeatherForecast();