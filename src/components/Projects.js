import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Ghibli from './videoPage/gibli';
import Gallery from './videoPage/gallery';
import Gas from './videoPage/gas';
import Aw from './videoPage/aw';
import Todo from './videoPage/todo';



const Projects = () => (
      <Router>
      <div className="container">
        <div className="btn"><Link to="/Projects/">Ghibli</Link></div>
        <div className="btn"><Link to="/Projects/gallery">Gallery</Link></div>
        <div className="btn"><Link to="/Projects/aw">Awareness</Link></div>
        <div className="btn"><Link to="/Projects/todo">Todo</Link></div>
        <div className="btn"><Link to="/Projects/gas">Gas</Link></div>
      </div> 
        <Route exact path="/Projects/" component={ Ghibli } />
        <Route path="/Projects/gallery" component={Gallery} />
        <Route path="/Projects/cv" component={Aw} />
        <Route path="/Projects/todo" component={Todo}  />
        <Route path="/Projects/gas" component={Gas}  />
      
  </Router>
);



export default Projects;
