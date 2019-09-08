import React from "react";
import ReactDOM from "react-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from "@fortawesome/free-solid-svg-icons";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null
        };

        window.navigator.geolocation.getCurrentPosition(

            (position) => {
                this.setState({ latitude: position.coords.latitude  });
            },
            (error) => console.log(error)
        );
    }

    render() {
        const { latitude } = this.state;

        return <div>Latitude : {latitude ? latitude : <FontAwesomeIcon icon={faSpinner} spin /> }</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
