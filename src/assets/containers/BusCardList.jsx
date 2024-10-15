import BusCard from "../containers/BusCard";

function BusCardList({ services }) {
    return (
        <div className="flex flex-wrap gap-4">
            {services.map((service, index) => (
                <BusCard key={index} service={service} />
            ))}
        </div>
    );
}

export default BusCardList;