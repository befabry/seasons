import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
    state = {latitude: null, errorMessage: ""};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message })
        );
    }

    render() {
        const { latitude, errorMessage } = this.state;

        if (errorMessage && !latitude) {
            return <div>Error: {errorMessage}</div>;
        } else if (!errorMessage && latitude) {
            return <div>Latitude: {latitude}</div>;
        }

        return (
            <div>
                Loading...&nbsp;
                <FontAwesomeIcon icon={faSpinner} spin />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
