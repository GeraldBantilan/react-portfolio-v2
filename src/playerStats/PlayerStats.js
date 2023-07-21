import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
    return(
        <div id="playerStats">
            <h1>Gerald Bantilan</h1>
            <div id="playerStats__lines">
                <span id="playerStats__lines__thick"></span> 
                <span id="player__lines__thin"></span> 
            </div>
            <h2>Frontend <span class="FE">Developer</span></h2>
        </div>
    )
}

export default PlayerStats;