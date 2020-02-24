import { useState, useEffect } from "react";

export default () => {
    const [latitude, setLatitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    //empty array, only run once
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLatitude(position.coords.latitude),
            (error) => setErrorMessage(error.message)
        );
    }, []);

    return [latitude, errorMessage];
};
