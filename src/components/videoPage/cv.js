import React from 'react';
import ReactPlayer from 'react-player'
import cv from '../videos/cv.mp4';

function Cv() {
    return (
        <div>
            <h3>First Portfolio</h3>
            <h6>Portfolio made in HTML and CSS only, for KSquare University</h6>
            <ReactPlayer url={cv} playing={true} />
            <a
          className="App-link"
          href="https://fatimaavilesfa.github.io/firstPortfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >Link to page</a>
        </div>
    );
  }
  
  export default Cv;