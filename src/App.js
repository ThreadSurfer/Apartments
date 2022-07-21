import './App.css';
import React, { Component, useState } from 'react'
import InfoMenu from './components/InfoMenu';
import { mockComponent } from 'react-dom/test-utils';

class App extends Component {

  constructor() {
    super()
    this.state = {
      info_menu_visible: "hidden",
      selectedApartment: null,
      cost: null,
      purchaser: null,
      color: ["white", "white", "white", "white", "white", "white"],
      serverResponse: null,
      url: null,
      date: null
    }
    this.displayMenu = this.displayMenu.bind(this)
  }

  async componentDidMount() {
      
    for (let id = 1; id <=6; id++) {
      await fetch('http://localhost:3000/apartments/' + id)
      .then(async (res) => {
        if(res.ok) {
          console.log(res.status)
          let colors = this.state.color
          colors[id -1] = "yellow"
          this.setState({color: colors})
          this.setState({url: "http://localhost:3000/apartments/" + id})
        }
       
      })
    }
  }

  changeProps = (id, color, purchaser, cost, serverResponse, date) => {
    const colorSlate = this.state.color
    colorSlate[id-1] = color
    this.setState({color: colorSlate, purchaser: purchaser, cost: cost, serverResponse: serverResponse, date: date})
  }


 displayMenu = async (id) => {
  let apartmentFetch = await fetch('http://localhost:3000/apartments/' + id)




  if(apartmentFetch.ok) {
    await apartmentFetch.json()
    .then(res => {
      this.setState({cost: res.cost, purchaser: res.purchaser, date: res.purchaseDate.substr(0, 10), info_menu_visible: "visible", serverResponse: "ok"})
      this.state.color[id -1] = "yellow"
    })

  }

  else {
    this.setState({ cost: null, purchaser: null, serverResponse: null, date: null})
  }
  
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
          <div className='apartment' style = {{ backgroundColor: this.state.color[0] }}  onClick={() => this.displayMenu(1)} id='1'></div>
          <div className='apartment' style = {{ backgroundColor: this.state.color[1] }}  onClick={() => this.displayMenu(2)} id='2'></div>
          <div className='apartment' style = {{ backgroundColor: this.state.color[2] }}  onClick={() => this.displayMenu(3)} id='3'></div>
          <div className='apartment' style = {{ backgroundColor: this.state.color[3] }}  onClick={() => this.displayMenu(4)} id='4'></div>
          <div className='apartment' style = {{ backgroundColor: this.state.color[4] }}  onClick={() => this.displayMenu(5)} id='5'></div>
          <div className='apartment' style = {{ backgroundColor: this.state.color[5] }}  onClick={() => this.displayMenu(6)} id='6'></div>
        </div>
       <InfoMenu visibility={this.state.info_menu_visible} date = {this.state.date} selectedApartment = {this.state.selectedApartment} id = {this.state.selectedApartment}
       purchaser = {this.state.purchaser} cost ={this.state.cost} changeProps = {this.changeProps} serverResponse = {this.state.serverResponse}
       />

       <div id='test'>  
       <p>Purchaser: {this.state.purchaser}</p>
       <p>Cost: {this.state.cost}</p>
       <p>Date: {this.state.date}</p>
       </div>
    
      </div>
      
      
    );
  }

}

export default App;
