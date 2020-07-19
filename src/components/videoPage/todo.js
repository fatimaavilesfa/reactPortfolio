import React from 'react';
import todo from '../images/todo.png';

function Todo() {
    return (
        <div>
        <h3>To do List</h3>
        <h6>Project for KSquare university made with HTML, CSS and Javascript</h6>
        <img src={todo} alt="weather App" style={{height: "360px", width:"640px"}}/>
            <br></br>
        <a
          className="App-link"
          href="https://fatimaavilesfa.github.io/toDo/"
          target="_blank"
          rel="noopener noreferrer"
        >Link to page</a>
        </div>
    );
  }
  
  export default Todo;