import React from 'react';
import ghibli from '../images/ghibli.png';

function Ghibli() {
    return (
        <div>
            <h3>Ghibli Search</h3>
            <h6>Project made to practice geting an api and search functionality and autocomplete</h6>
            <img src={ghibli} alt="weather App" style={{height: "360px", width:"640px"}}/>
            <br></br>
            <a
                className="App-link"
                href="https://fatimaavilesfa.github.io/PruebaGhibli/"
                target="_blank"
                rel="noopener noreferrer"
            >Link to page</a>
        </div>
    );
  }
  
  export default Ghibli;