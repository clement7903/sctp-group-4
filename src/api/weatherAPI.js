import axios from 'axios';

/**
 * These are the APIs for weather data.
 */
const TWENTY_FOUR_HOUR_FORECAST_URL = 'https://api-open.data.gov.sg/v2/real-time/api/twenty-four-hr-forecast';
const WeatherForecastAPI = axios.create({
    baseURL: TWENTY_FOUR_HOUR_FORECAST_URL,
    timeout: 3000,
});

const PM_25_URL = 'https://api.data.gov.sg/v1/environment/pm25'
const PM25API = axios.create({
    baseURL: TWENTY_FOUR_HOUR_FORECAST_URL,
    timeout: 3000,
});

export { WeatherForecastAPI, PM25API };