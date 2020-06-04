import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="part">
          <div className="losange">
            <div className="los1">
            <img src="fatima.jpg" alt="" width="240" height="305" />
            </div>
          </div>
        </div>
        <h1>Fatima Aviles</h1>
        <p id="description">
        I'm a Software Associate at KSquare University in Merida, Yuc.
        I have serious passion for solving probles and creating solutions.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/fatima-aviles-51752516a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          className="App-link"
          href="https://github.com/fatimaavilesfa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://www.codewars.com/users/Fatima87"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codewars
        </a>
      </header>
    </div>
  );
}

export default Home;
