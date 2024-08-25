import React, { useState } from "react";

function Hero() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if(!city){
        setError("Please enter the city name");
        return;
    }
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8836c24544aebfcbb61ba4b064f23d9e&units=metric`
      );
      if (!res.ok) {
        throw new Error("Response was not ok!");
      }
      const data = await res.json();
      console.log(data);
      setWeatherData(data);
      setCity("");
      setError(null);
    } catch (error) {
      console.error("Fetch error: ", error);
      setError("Failed to fetch weather data. Please try again.");
    }
  }

  return (
    <>
      {/* Form to search city name */}
      <div className="flex justify-center items-start py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
        >
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Enter City name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Data fetching */}
      { (!error && weatherData) && (
        <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-500 text-white rounded-lg shadow-xl mt-6 mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Weather in {weatherData.name}</h2>
          <div className="flex justify-center items-center mb-4">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="w-24 h-24"
            />
          </div>
          <p className="text-lg mb-2">{weatherData.weather[0].description}</p>
          <p className="text-3xl font-bold">
            {weatherData.main.temp}°C
          </p>
          <p className="text-lg mt-2">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-lg mt-2">Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}

      {/* Display error message */}
      {error && (
        <div className="p-6 bg-red-200 text-red-800 rounded-lg shadow-lg mt-6 mx-auto max-w-lg text-center">
          <p>{error}</p>
        </div>
      )}
    </>
  );
}

export default Hero;
