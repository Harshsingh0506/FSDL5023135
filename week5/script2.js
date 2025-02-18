// Your OpenWeatherMap API key
const apiKey = '24e44fe73384008a4140fd37574fdd8b';

function getWeather() {
    const city = document.getElementById('city').value;
    
    if (!city) {
        alert('Please enter a city name!');
        return;
    }
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    // Fetch weather data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // Extract relevant data
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Update the DOM with the weather data
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <p><strong>${cityName}</strong></p>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
            weatherInfo.style.display = 'block';
        })
        .catch(error => {
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<p class="error">Error: ${error.message}</p>`;
            weatherInfo.style.display = 'block';
        });
}
