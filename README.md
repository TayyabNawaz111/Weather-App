
Weather App:
This is a simple weather application built with React that allows users to search for the current weather in any city. The app fetches weather data from the OpenWeatherMap API and displays it in a user-friendly interface.

Features:
City Search: Users can enter the name of any city to retrieve the current weather data.
Weather Display: The app shows key weather information, including temperature, weather conditions, humidity, and wind speed.
Error Handling: If the city name is misspelled or the data cannot be fetched, an error message is displayed.
Technologies Used
React: JavaScript library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.
OpenWeatherMap API: Provides weather data.

Getting Started:
Prerequisites
Node.js and npm installed on your machine.


Installation
Clone the repository:
git clone https://github.com/TayyabNawaz111/Weather-App.git
cd Weather-App


Install the dependencies:
npm install


Start the development server:
npm start
The app will run on http://localhost:5173.

Usage:
Open the app in your browser.
Enter the name of the city you want to search for in the input field.
Click the "Search" button to retrieve the weather data.
The app will display the current weather conditions for the specified city.

Code Overview:
src/App.js: Main entry point of the application.
src/components/Hero.js: Contains the main logic for fetching and displaying weather data.
API Reference
OpenWeatherMap API: The app uses the OpenWeatherMap API to retrieve weather data. You can sign up for a free API key here (https://openweathermap.org/).
Example API call:
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

Contact:
For any questions or feedback, please reach out to m.tayyab33600@gmail.com.
