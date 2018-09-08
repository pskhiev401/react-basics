import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: 'bob',
      age: null,
      display: 'test'
    }
  }

  changeName = (event) => {
    this.setState({name:event.target.value})
  }

  clickHandler = (name) => {
    this.setState({display:name});   
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>My App</h1>
        <p>Temp: {this.state.name} </p>
        <p>Name: {this.state.display}</p>
        <input onChange= {(event) => this.changeName (event)} placeholder='Enter Name Here'/>
        <button onClick= {() => this.clickHandler(this.state.name)} >Submit Here</button>
        <p>Age: {this.state.age}</p>
        <input placeholder='Enter Age Here'/>
        
      </div>
    );
  };;
}

export default App;
