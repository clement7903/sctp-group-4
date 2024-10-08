import { useState } from 'react';
import { BusForecastAPI } from '../../api/busAPI';

const fetchBusArrivalData = async () => {
    try {
        const response = await BusForecastAPI.get('');
        if (response.status === 200) {
            console.log('This is response', response)
            console.log('This is response', response.data.Services)
        }

    } catch (error) {
        console.log(error.message);
    }
};

function BusComponent() {
    const [isDisplaying, setIsDisplaying] = useState(false);

    return (
        <>
            <p>This is bus component</p>
            {!isDisplaying && <button onClick={fetchBusArrivalData}>Load bus data</button>}
        </>
    )
}

export default BusComponent