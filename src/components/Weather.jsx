import React, { useState, useEffect } from "react"; 
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const lat = 24.571270; 
        const lon = 73.691544;
        const apiKey = "2433638808f3d80480ea66713c34b8d3"; 

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error.response || error);
        setError("Could not fetch weather data. Please try again later.");
      }
    };

    fetchWeather();
  }, []);

  if (error) return <p>{error}</p>;
  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className="weather">
      <p>Location: {weather.name}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;
