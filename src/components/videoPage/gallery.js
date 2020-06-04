import React from 'react';
import ReactPlayer from 'react-player'
import gallery from '../videos/gallery.mp4';

function Gallery() {
    return (
        <div>
            <h3>Gallery</h3>
            <h6>This porject I made to practice css grid and endded up learning to edit images with css</h6>
            <ReactPlayer url={gallery} playing={true} />
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