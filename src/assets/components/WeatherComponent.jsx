import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { PM25API, WeatherForecastAPI } from '../../api/weatherAPI'
import { useNavigate } from 'react-router-dom';

const weatherDescriptions = {
    'Fair': '⛅️',
    'Fair (Day)': '🌤️',
    'Fair (Night)': '🌙',
    'Fair and Warm': '☀️',
    'Partly Cloudy': '⛅️',
    'Partly Cloudy (Day)': '🌤️',
    'Partly Cloudy (Night)': '🌙',
    'Cloudy': '☁️',
    'Hazy': '🌫️',
    'Slightly Hazy': '🌫️',
    'Windy': '🌬️',
    'Mist': '🌫️',
    'Fog': '🌫️',
    'Light Rain': '🌧️',
    'Moderate Rain': '🌧️',
    'Heavy Rain': '🌧️',
    'Passing Showers': '🌦️',
    'Light Showers': '🌦️',
    'Showers': '🌦️',
    'Heavy Showers': '🌧️',
    'Thundery Showers': '⛈️',
    'Heavy Thundery Showers': '⛈️',
    'Heavy Thundery Showers with Gusty Winds': '⛈️🌬️',
}

function WeatherComponent() {
    const [weatherData, setWeatherData] = useState([]);
    const [pm25, setPm25] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isDisplaying, setIsDisplaying] = useState(false);

    const navigate = useNavigate();

    async function getWeatherInformation() {
        try {
            const response = await WeatherForecastAPI.get('/');
            if (response.status === 200) {
                console.log(response.data.data.records[0].periods);
                setWeatherData(response.data.data.records[0].periods);
                setIsLoading(false);
                setIsDisplaying(true);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function getPM25Information() {
        try {
            const response = await PM25API.get('/');
            if (response.status === 200) {
                console.log(response.data.items[0].readings.pm25_one_hourly);
                setPm25(response.data.items[0].readings.pm25_one_hourly);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // useEffect(() => {
    //   getWeatherInformation();
    // }, [])

    function handleBackToHome() {
        navigate('/');
    }

    return (
        <div className="App">
            <div className="content-container">
                <h2>24-hour Weather</h2>
                {!isDisplaying && <button onClick={getWeatherInformation}>Load weather data</button>}
                {isDisplaying && <button onClick={handleBackToHome}>Back to home</button>}
                <button onClick={getPM25Information}>Load PM 2.5</button>
                <h3>Region Data</h3>
                {pm25 ? (
                    <ul>
                        {Object.entries(pm25).map(([region, value]) => (
                            <li key={region}>
                                {region.charAt(0).toUpperCase() + region.slice(1)}: {value}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
                {isLoading ? <p>^ Click on load weather data ^</p> : (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Time Period</th>
                                    <th>Central</th>
                                    <th>East</th>
                                    <th>North</th>
                                    <th>South</th>
                                    <th>West</th>
                                </tr>
                            </thead>
                            <tbody>
                                {weatherData.map((data) => (
                                    <tr key={uuid()}>
                                        <td>{data.timePeriod.text}</td>
                                        <td>{data.regions.central.text + "   " + weatherDescriptions[data.regions.central.text]}</td>
                                        <td>{data.regions.east.text + "   " + weatherDescriptions[data.regions.east.text]}</td>
                                        <td>{data.regions.north.text + "   " + weatherDescriptions[data.regions.north.text]}</td>
                                        <td>{data.regions.south.text + "   " + weatherDescriptions[data.regions.south.text]}</td>
                                        <td>{data.regions.west.text + "   " + weatherDescriptions[data.regions.west.text]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>The above weather data is sourced from: https://api-open.data.gov.sg/v2/real-time/api/twenty-four-hr-forecast</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default WeatherComponent;