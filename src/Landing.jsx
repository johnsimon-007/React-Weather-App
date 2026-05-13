import { useState } from "react";
import axios from "axios";
import "./index.css"
import clearbg from "./assets/clearbg.mp4"

import { useLocation } from "react-router-dom";
 function Landing(){

    const [city, setCity] = useState("");
        const [weatherData, setWeatherData] = useState(null);
        const [error, setError] = useState("");
    
        async function getWeather() {
            try {
                setError("")
                const apiKey = "ea5ef336c87a85e861e02890a354482d"
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
                )
                setWeatherData(response.data)
            }
            catch (error) {
                setError("City not Found!!!")
            }
        }
    
        let weatherIcon = "☁"
    
        if (weatherData) {
    
            const condition = weatherData.weather[0].main
    
            if (condition === "Clear") {
                weatherIcon = "☀"
            }
    
            else if (condition === "Rain") {
                weatherIcon = "🌧"
            }
    
            else if (condition === "Clouds") {
                weatherIcon = "☁"
            }
    
            else if (condition === "Snow") {
                weatherIcon = "❄"
            }
    
            else if (condition === "Thunderstorm") {
                weatherIcon = "⛈"
            }
    
        }

    const location = useLocation();
    return(
       <>
        
        <div className="Weather-Container">
                        <video autoPlay loop muted playsInline className="bg-video">
                            <source src={clearbg} type="video/mp4" />
                        </video>
        
                        <div className="Weather-Card">
                            <h1>Welcome, {location.state?.username || "Guest"}!</h1>
                            <h1 className="title">Weather App</h1>
        
                            <p className="subtitle">Get live weather updates instantly</p>
        
                            <div className="search-box">
                                <input type="text" placeholder="Enter city name" value={city} onChange={(e) => setCity(e.target.value)} />
                                <button onClick={getWeather}>Search</button>
                            </div>
        
                            {error && <p className="error">{error}</p>}
        
                            {weatherData && (
                                <div className="weather-info">
        
                                    <h2>{weatherIcon} {weatherData.name}</h2>
                                    <h1 className="temp">
                                        {Math.round(weatherData.main.temp)}°C
                                    </h1>
                                    <p className="condition">
                                        {weatherData.weather[0].main}
                                    </p>
        
                                    <div className="details">
        
                                        <div className="detail-card">
                                            <h3>Humidity</h3>
                                            <p>{weatherData.main.humidity}%</p>
                                        </div>
        
                                        <div className="detail-card">
                                            <h3>Wind</h3>
                                            <p>{weatherData.wind.speed} km/h</p>
                                        </div>
        
                                    </div>
        
        
        
                                </div>
                            )}
        
                        </div>
        
                    </div>
       </>
    )
}
export default Landing;