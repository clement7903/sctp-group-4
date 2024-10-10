import { useEffect, useState } from 'react';
import { BusForecastAPI, BusStopsAPI } from '../../api/busAPI';
import dayjs from 'dayjs';

const fetchBusArrivalData = async (busstopcode, setBusData) => {
    try {
        const response = await BusForecastAPI.get(`BusArrival?BusStopCode=${busstopcode}`);
        if (response.status === 200) {
            console.log('Response data:', response.data.Services[0]);
            setBusData(response.data.Services);  // Store bus services data in state
        }
    } catch (error) {
        console.log(error.message);
    }
};

const fetchBusStopCodes = async (setBusStopCodes) => {
    try {
        const response = await BusStopsAPI.get('BusStops');
        if (response.status === 200) {
            console.log('Response data:', response.data.value);
            setBusStopCodes(response.data.value);  // Store bus stop codes in state
        }
    } catch (error) {
        console.log(error.message);
    }
}

const calculateMinutesTillArrival = (arrivalTime) => {
    const now = dayjs();
    const estimatedArrival = dayjs(arrivalTime);
    const minutesTillArrival = estimatedArrival.diff(now, 'minute'); // Calculate difference in minutes
    return minutesTillArrival >= 0 ? minutesTillArrival : 'Arrived';
};

function BusComponent() {
    const [isDisplaying, setIsDisplaying] = useState(false);
    const [busData, setBusData] = useState(null);  // State to store bus data
    const [busStopCode, setBusStopCode] = useState('');  // State for bus stop code input
    const [busStopCodes, setBusStopCodes] = useState([]);  // State to store bus stop codes

    useEffect(() => {
        fetchBusStopCodes(setBusStopCodes);
    }, []);

    const handleClick = () => {
        if (busStopCode) {
            fetchBusArrivalData(busStopCode, setBusData);
            setIsDisplaying(true);
        } else {
            alert('Please enter a valid bus stop code.');
        }
    };

    return (
        <>
            <h2>This is the Bus component</h2>
            {!isDisplaying ? (
                <>
                    <input
                        type="text"
                        placeholder="Bus Stop Code e.g. 83139"
                        value={busStopCode}
                        onChange={(e) => setBusStopCode(e.target.value)}  // Update bus stop code
                    />
                    <button onClick={handleClick}>Load bus data</button>

                    {/* Displaying bus stop codes */}
                    {/* <h3>Available Bus Stops</h3>
                    <ul>
                        {busStopCodes.map((busStop, index) => (
                            <li key={index}>
                                {busStop.BusStopCode}: {busStop.Description}
                            </li>
                        ))}
                    </ul> */}
                </>
            ) : (
                <>
                    <h3>Bus Arrival Data for Stop: {busStopCode}</h3>
                    {busData ? (
                        <ul>
                            {busData.map((service, index) => (
                                <li key={index}>
                                    Bus {service.ServiceNo}: {calculateMinutesTillArrival(service.NextBus.EstimatedArrival)} minutes till arrival
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Loading...</p>
                    )}
                </>
            )}
        </>
    );
}

export default BusComponent;