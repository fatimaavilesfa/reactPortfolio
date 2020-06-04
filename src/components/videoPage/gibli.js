import React from 'react';
import ReactPlayer from 'react-player'
import ghibli from '../videos/ghibli.mp4';

function Ghibli() {
    return (
        <div>
            <h3>Ghibli Search</h3>
            <h6>Project made to practice geting an api and search functionality and autocomplete</h6>
            <ReactPlayer url={ghibli} playing={true} />
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