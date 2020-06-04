import React, {Component} from 'react';


class Form extends Component  {
  constructor() {
    super();
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
      const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
      const email = this.state.value;
      if(!regex.test(email)) {
          alert("Please provide valid email")
      }
   
    console.log(email)
    
  }

render() {
  return (
      <div>
        <form  onSubmit={this.handleSubmit}>
          <h1>Send Me Resume</h1>
          <label>
            Enter your Email:
            <br></br>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <br></br>
          <br></br>
          <button type="submit" className="btn" value="Submit">Send</button>
        </form>
      </div>
  );
}
}


export default Form;
