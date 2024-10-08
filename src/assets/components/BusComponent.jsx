import axios from 'axios';
import { useState } from 'react';
import { BusForecastAPI } from '../../api/busAPI';

const fetchBusArrivalData = async () => {
    try {
        const response = await BusForecastAPI.get('/');
        console.log('This is resons', response)
    } catch (error) {
        console.log(error.message);
    }
};

function BusComponent() {
    const [isDisplaying, setIsDisplaying] = useState(false);

    return (
        <>
            <p>This is bus component</p>
            {!isDisplaying && <button onClick={fetchBusArrivalData}>Load weather data</button>}
        </>
    )
}

export default BusComponent