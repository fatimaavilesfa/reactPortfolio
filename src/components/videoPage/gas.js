import React from 'react';
import ReactPlayer from 'react-player'
import gas from '../videos/gas.mp4';

function Gas() {
    return (
        <div>
            <h3>Gas Prices in Mexico</h3>
            <h6>This is my first project using the full stack HTML, CSS, Javascript, Node.js, Express, Nedb and XML file</h6>
            <ReactPlayer url={gas} playing={true} />
        </div>
    );
  }
  
  export default Gas;