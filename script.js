asyasync function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "56b57bf5a5f04945853112716250805";

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("result").innerHTML = `
        <p><strong>${data.name}</strong></p>
        <p>${data.weather[0].main} - ${data.weather[0].description}</p>
        <p>🌡 Temp: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬 Wind: ${data.wind.speed} m/s</p>
      `;
    } else {
      document.getElementById("result").innerText = `Error: ${data.message}`;
    }
  } catch (error) {
    console.error(error);
    document.getElementById("result").innerText = "Something went wrong!";
  }
}

