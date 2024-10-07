import { useLocation } from "react-router-dom";

function DefaultComponent() {
    const location = useLocation();
    return (
        <div>
            <h2>404 - Page not found -
                <span style={{ color: "red" }}>
                    {location.pathname}
                </span>
            </h2>
        </div>
    );
}

export default DefaultComponent;