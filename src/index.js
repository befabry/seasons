import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

//Functional (Hook) component
const App2 = () => {
    const [latitude, errorMessage] = useLocation();

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (latitude) {
        content = <SeasonDisplay latitude={latitude} />;
    } else {
        content = <Spinner message="Please accept location request ! " />;
    }

    return <div className="border red">{content}</div>;
};

//Class component
class App extends React.Component {
    state = { latitude: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message })
        );
    }

    /**
     * Helper method to wrap the different returns in the render method.
     */
    renderContent(latitude, errorMessage) {
        if (errorMessage && !latitude) {
            return <div>Error: {errorMessage}</div>;
        } else if (!errorMessage && latitude) {
            return <SeasonDisplay latitude={latitude} />;
        }

        return <Spinner message="Please accept location request ! " />;
    }

    render() {
        const { latitude, errorMessage } = this.state;

        return (
            <div className="border red">
                {this.renderContent(latitude, errorMessage)}
            </div>
        );
    }
}

ReactDOM.render(<App2 />, document.querySelector("#root"));
