import React from 'react';
import weather from '../images/weatherApp.png';

function Gas() {
    return (
        <div>
            <h3>Weather App</h3>
            <h6>First application front, back and deployed.</h6>
            <img src={weather} alt="weather App" style={{height: "360px", width:"640px"}}/>
            <br></br>
            <a
                className="App-link"
                href="https://villa-weather.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
            >Link to page</a>
        </div>
    );
  }
  
  export default Gas;