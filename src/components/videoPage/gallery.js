import React from 'react';
import gallery from '../images/gallery.png';

function Gallery() {
    return (
        <div>
            <h3>Gallery</h3>
            <h6>This porject I made to practice css grid and endded up learning to edit images with css</h6>
            <img src={gallery} alt="weather App" style={{height: "360px", width:"640px"}}/>
            <br></br>
            <a
                className="App-link"
                href="https://fatimaavilesfa.github.io/gallery/"
                target="_blank"
                rel="noopener noreferrer"
            >Link to page</a>
        </div>
    );
  }
  
  export default Gallery;