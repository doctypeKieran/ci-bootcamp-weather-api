const apiKey = "f3250885431f58878f508fbb70480058";

// DOM elements
const cityInput = document.getElementById('city');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');

// Add click event to search button
searchBtn.addEventListener('click', async () => {
    const city = cityInput.value;
    const coordinates = await fetchCoordinates(city);
    fetchWeather(coordinates.lat, coordinates.lon);
})