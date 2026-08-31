import React, { useState, useEffect } from "react";

interface CurrentWeather {
  temperature: number;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);

  useEffect(() => {
    const lat = 33.6844;
    const lon = 73.0479;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.current_weather);
      });
  }, []);

  if (!weather) {
    return <p>Loading weather...</p>;
  }

  return (
    <div>
      <h2>Islamabad Weather</h2>
      <p>Temperature: {weather.temperature}°C</p>
    </div>
  );
}