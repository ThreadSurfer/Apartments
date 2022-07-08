import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { render } from '@testing-library/react';
import InfoMenu from './components/InfoMenu'

class App extends Component {

 state = {
  info_menu_visible: false
 }


  render() {
    return (
      <div className="App">
        <div className="building">
          <div className='apartment' onClick={(this.sendEmail)} id='1'></div>
          <div className='apartment' onClick={() => console.log(2)} id='2'></div>
          <div className='apartment' onClick={() => console.log(3)} id='3'></div>
          <div className='apartment' onClick={() => console.log(4)} id='4'></div>
          <div className='apartment' onClick={() => console.log(5)} id='5'></div>
          <div className='apartment' onClick={() => console.log(6)} id='6'></div>
        </div>
        <InfoMenu visible="false" />
      </div>
    );
  }

}

export default App;
