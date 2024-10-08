import axios from 'axios';

/**
 * These are the APIs for bus data.
 */
const apiKey = import.meta.env.VITE_API_KEY;

const BUS_FORECAST_URL = 'https://cors-anywhere.herokuapp.com/https://datamall2.mytransport.sg/ltaodataservice/v3/BusArrival?BusStopCode=83139';
const BusForecastAPI = axios.create({
    baseURL: BUS_FORECAST_URL,
    headers: {
        AccountKey: apiKey,
        accept: 'application/json'
    }
});

export { BusForecastAPI };