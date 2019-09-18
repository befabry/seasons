import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = (props) => {
    const { message } = props;

    return (
        <div className="ui active dimmer">
            <div
                className="ui big text"
                style={{ color: "white", fontWeight: "bold" }}
            >
                <FontAwesomeIcon
                    icon={faSpinner}
                    size="4x"
                    spin
                    style={{ marginBottom: "15px", color: "white" }}
                />
                <p>{message}</p>
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;
