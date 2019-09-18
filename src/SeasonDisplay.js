import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import "./SeasonDisplay.css";

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: faSun
    },
    winter: {
        text: "Burr, it is chilly",
        iconName: faSnowflake
    }
};

const getSeason = (latitude, month) => {
    const summer = "summer",
        winter = "winter";

    if (month > 2 && month < 9) {
        return latitude > 0 ? summer : winter;
    }

    return latitude < 0 ? winter : summer;
};

const SeasonDisplay = (props) => {
    const { latitude, time } = props;
    const season = getSeason(latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <FontAwesomeIcon
                icon={iconName}
                size="8x"
                className="icon-left season-icon"
            />
            <h1>{text}</h1>
            <br />
            <h2>Time is : {time}</h2>
            <FontAwesomeIcon
                icon={iconName}
                size="8x"
                className="icon-right season-icon"
            />
        </div>
    );
};

export default SeasonDisplay;
