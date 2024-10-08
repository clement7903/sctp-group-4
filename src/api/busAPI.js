import axios from 'axios';

/**
 * These are the APIs for bus data.
 */

const BUS_FORECAST_URL = 'https://cors-anywhere.herokuapp.com/https://datamall2.mytransport.sg/ltaodataservice/v3/BusArrival?BusStopCode=83139';
const BusForecastAPI = axios.create({
    baseURL: BUS_FORECAST_URL,
    timeout: 3000,
    headers: {
        'AccountKey': 'r7xHli3ERkORnxkJr2iyww=='
    }
});

export { BusForecastAPI };