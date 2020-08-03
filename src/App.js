import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import SlitPlane from 'react-split-pane';
import Projects from './components/Projects';
import Home from './components/Home';
import Skills from './components/Skills';
import Form from './components/form';


const styles = {
  background: "#D5C5E9",
  width: "2px",
  cursor: "col-resize",
  margin: "0 5px",
  height: "100%"
};

function App() {
  return (
    <div >
    <Router>
    <SlitPlane
      split="vertical"
      minSize={100}
      defaultSize={200}
      resizerStyle={styles}
    >
      <menu className="link">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Projects">Projects</Link>
        </div>
        <div>
          <Link to="/Skills">Skills</Link>
        </div>
        <div>
          <a href="/fatimaResume.pdf">Resume</a>
        </div>
      </menu>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Skills" component={Skills} />
        {/* <Route path="/Form" component={Form} /> */}
      </div>
    </SlitPlane>
  </Router>
  </div>
  );
}

export default App;
