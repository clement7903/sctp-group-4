/*
This is a component for displaying all the bus arrival timings for a bus stop. It is a child component of BusComponent. It is a functional component that takes in a prop called service which is an object containing the bus service number, operator, and the next bus arrival timings. It calculates the minutes till the next bus arrival and displays it in the card. It also displays the operator logo based on the operator name.
*/

import dayjs from 'dayjs';

/*
Helper function to calculate the arrival time for each bus
*/
const calculateMinutesTillArrival = (arrivalTime) => {
    const now = dayjs();
    const estimatedArrival = dayjs(arrivalTime);
    const minutesTillArrival = estimatedArrival.diff(now, 'minute'); // Calculate difference in minutes
    return minutesTillArrival >= 0 ? minutesTillArrival : 'Arrived';
};

const returnOperatorLogoLink = (operator) => {
    if (operator === 'GAS') {
        return "https://scontent.fsin3-1.fna.fbcdn.net/v/t39.30808-6/327429306_878743816740391_17396639373479663_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cbHOADyWt8cQ7kNvgFRe9cs&_nc_zt=23&_nc_ht=scontent.fsin3-1.fna&_nc_gid=A3ieFwFiZAy5MjDUIB2HKvU&oh=00_AYD8EOnSOeaF5kM81asAL7f3UmxI29Wkcp2tFj6P6ymUNg&oe=6714215C"
    }
    else if (operator === 'SBST') {
        return "https://pbs.twimg.com/profile_images/577406046479601664/9nxTkmbd_400x400.jpeg"
    }
    
    else if (operator === 'SMRT') {
        return "https://scontent.fsin3-1.fna.fbcdn.net/v/t39.30808-6/347819778_640128290822856_9001480339586609155_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=v5GF-clMvT8Q7kNvgHzon1g&_nc_zt=23&_nc_ht=scontent.fsin3-1.fna&_nc_gid=AlCJeA3_PB2BD9yKE5qwWJk&oh=00_AYAiHkhy-NNxQW1nnbSN7TupCImCUGGCRZs7nWYccs1GGQ&oe=67144BB1"
    }
}


function BusCard({ service }) {
    console.log('Service:', service);
    return (
        <div className="card">
            <img src= {returnOperatorLogoLink(service.Operator)}
            style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '50%' }} 
            className="card-img-top" alt={service.Operator}/>
                <div className="card-body">
                    <h5 className="card-title">Bus {service.ServiceNo}</h5>
                    <p className="card-text">Arriving in {calculateMinutesTillArrival(service.NextBus.EstimatedArrival)} mins</p>
                </div>
        </div>
    );
}

export default BusCard;