import { useEffect, useState } from 'react';
import { BusForecastAPI, BusStopsAPI } from '../../api/busAPI';
import dayjs from 'dayjs';

/*
Gets all the bus arrival timings using Bus Stop Code inputted by User
 */
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

/*
Fetches all the bus stop codes to populate dropdown selection for User to choose
*/
const fetchBusStopCodes = async (setBusStopCodes) => {
    try {
        const response = await BusStopsAPI.get('BusStops');
        if (response.status === 200) {
            const busStopCodesArray = response.data.value.reduce((acc, busStopObject) => {
                console.log('This is the object', busStopObject)
                acc.push(busStopObject);
                return acc;
            }, []);
            setBusStopCodes(busStopCodesArray);  // Store bus stop codes in array state
        }
    } catch (error) {
        console.log(error.message);
    }
}

/*
Helper function to calculate the arrival time for each bus
*/
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
    const [busStopCodes, setBusStopCodes] = useState([]);  // An Array State to store only bus stop codes

    useEffect(() => {
        fetchBusStopCodes(setBusStopCodes);
    }, []);

    const handleClick = () => {
        if (busStopCode) {
            fetchBusArrivalData(busStopCode, setBusData);
            setIsDisplaying(true);
        } else {
            alert('Please select a bus stop code.');
        }
    };

    return (
        <>
            <h2>This is the Bus component</h2>
            {!isDisplaying ? (
                <>
                    <select
                        value={busStopCode}
                        onChange={(e) => setBusStopCode(e.target.value)}  // Update bus stop code from dropdown
                    >
                        <option value="">Select a bus stop code</option>
                        {busStopCodes.map((busStopObject, index) => (
                            <option key={index} value={busStopObject.BusStopCode}>
                                {busStopObject.Description + " along " + busStopObject.RoadName}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleClick}>Load bus data</button>
                </>
            ) : (
                <>
                    <h3>Bus Arrival Data for Stop: {busStopCode}</h3>
                    {busData ? (
                        <ul>
                            {/* TODO: change the following code to a custom "card" / component */}
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