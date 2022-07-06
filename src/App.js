import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { render } from '@testing-library/react';

class App extends Component {

  handleClick() {
    console.log("element clicked");
    
}

async fetchData() {
  await fetch("http://localhost:3000/apartments")
  .then(res => res.json())
  .then(json => {
    console.log(json)
    alert(json[0].cost)
  })
}
  render() {
    return (
      <div className="App">
        <div className="building">
          <div className='apartment' onClick={this.fetchData} id='1'></div>
          <div className='apartment' onClick={() => console.log(2)} id='2'></div>
          <div className='apartment' onClick={() => console.log(3)} id='3'></div>
          <div className='apartment' onClick={() => console.log(4)} id='4'></div>
          <div className='apartment' onClick={() => console.log(5)} id='5'></div>
          <div className='apartment' onClick={() => console.log(6)} id='6'></div>
        </div>
      </div>
    );
  }

}

export default App;
