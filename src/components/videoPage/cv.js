import React from 'react';
import aw1 from '../images/aw1.png';

function Cv() {
    return (
        <div>
            <h3>diabetes Awareness</h3>
            <h6>Website developed to create diabetes awareness that includes a test</h6>
            <img src={aw1} alt="weather App" style={{height: "360px", width:"640px"}}/>
            <br></br>
            <a
          className="App-link"
          href="https://tita-awareness.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >Link to page</a>
        </div>
    );
  }
  
  export default Cv;