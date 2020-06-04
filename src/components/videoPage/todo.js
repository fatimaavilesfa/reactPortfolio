import React from 'react';
import ReactPlayer from 'react-player'
import todo from '../videos/todo.mp4';

function Todo() {
    return (
        <div>
        <h3>To do List</h3>
        <h6>Project for KSquare university made with HTML, CSS and Javascript</h6>
        <ReactPlayer url={todo} playing={true} />
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