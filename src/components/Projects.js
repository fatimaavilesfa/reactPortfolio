import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Ghibli from './videoPage/gibli';
import Gallery from './videoPage/gallery';
import Weather from './videoPage/weather';
import Aw from './videoPage/aw';



const Projects = () => (
      <Router>
      <div className="container">
        <div className="btn"><Link to="/Projects/">Ghibli</Link></div>
        <div className="btn"><Link to="/Projects/gallery">Gallery</Link></div>
        <div className="btn"><Link to="/Projects/aw">Awareness</Link></div>
        <div className="btn"><Link to="/Projects/weather">Weather</Link></div>
      </div> 
        <Route exact path="/Projects/" component={ Ghibli } />
        <Route path="/Projects/gallery" component={Gallery} />
        <Route path="/Projects/aw" component={Aw} />
        <Route path="/Projects/weather" component={Weather}  />
      
  </Router>
);



export default Projects;
