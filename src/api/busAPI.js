import axios from 'axios';

/**
 * These are the APIs for bus data.
 */
const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = `${import.meta.env.VITE_API_URL}/ltaodataservice/`

const BusForecastAPI = axios.create({
    baseURL: BASE_URL + '/v3',
    headers: {
        AccountKey: apiKey,
        accept: 'application/json'
    }
});

const BusStopsAPI = axios.create({
    baseURL: BASE_URL,
    headers: {
        AccountKey: apiKey,
        accept: 'application/json'
    }
});

export { BusForecastAPI, BusStopsAPI };