import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import InfoMenu from './components/InfoMenu';

class App extends Component {

  constructor() {
    super()
    this.state = {
      info_menu_visible: "hidden",
      selectedApartment: null,
    }
    this.displayMenu = this.displayMenu.bind(this)
  }

 displayMenu = (id) => {

  console.log(id)
  
  if(this.state.info_menu_visible == 'hidden'){
    this.setState({info_menu_visible: 'visible', selectedApartment: id})

  }

  else if(this.state.selectedApartment === id) {
    this.setState({info_menu_visible: 'hidden'})
  }

  else {
    this.setState({selectedApartment: id,})
  }
  
 }

  render() {
    return (
      <div className="App">
        <div className="building">
          <div className='apartment' onClick={() => this.displayMenu(1)} id='1'></div>
          <div className='apartment' onClick={() => this.displayMenu(2)} id='2'></div>
          <div className='apartment' onClick={() => this.displayMenu(3)} id='3'></div>
          <div className='apartment' onClick={() => this.displayMenu(4)} id='4'></div>
          <div className='apartment' onClick={() => this.displayMenu(5)} id='5'></div>
          <div className='apartment' onClick={() => this.displayMenu(6)} id='6'></div>
        </div>
       <InfoMenu visibility={this.state.info_menu_visible} selectedApartment = {this.state.selectedApartment} id = {this.state.selectedApartment}/>
      </div>
    );
  }

}

export default App;
