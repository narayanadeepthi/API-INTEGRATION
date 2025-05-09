const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'a7b18b89f50dd10d1a8a8594290959ed';
const weatherDataElement = document.getElementById('weather-data');

fetch(`${apiEndpoint}?q=hyderabad&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const weatherData = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
        weatherDataElement.innerHTML = weatherData;
    })
    .catch(error => console.error('Error fetching weather data:', error));