import React from 'react';
import TechChart from './chartPage/techChart';
import LangChart from './chartPage/langChart';
import MartialArts from './chartPage/ma';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import './Skills.css';



const Skills = () => (
  <Router>
     <div className="container">
      <div className="btn"><Link to="/Skills/">Tech</Link></div>
      <div className="btn"><Link to="/Skills/lang">Languages</Link></div>
      <div className="btn"><Link to="/Skills/art">Martial Arts</Link></div>
      <div className="animation start-home"></div>
    </div>
        <Route exact path="/Skills/" component={TechChart} />
        <Route path="/Skills/lang" component={LangChart} />
        <Route path="/Skills/art" component={MartialArts} />
      
  </Router>
);

export default Skills;
