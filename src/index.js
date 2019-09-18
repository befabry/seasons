import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    state = { latitude: null, errorMessage: "", time: null };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message })
        );

        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
    }

    /**
     * Helper method to wrap the different returns in the render method.
     */
    renderContent(latitude, errorMessage, time) {
        if (errorMessage && !latitude) {
            return <div>Error: {errorMessage}</div>;
        } else if (!errorMessage && latitude) {
            return <SeasonDisplay latitude={latitude} time={time} />;
        }

        return <Spinner message="Please accept location request ! " />;
    }

    render() {
        const { latitude, errorMessage } = this.state;

        return (
            <div className="border red">
                {/*Warning : don't do this in prod it's re-rendered every seconds*/}
                {this.renderContent(latitude, errorMessage, this.state.time)}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
