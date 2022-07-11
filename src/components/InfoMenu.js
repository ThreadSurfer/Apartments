import React, { useState } from 'react'
const cors = require('cors')


export default function InfoMenu(props) {


    const url = "http://localhost:3000/apartments/" //Setting url path for post request
    const postData = async (url) => {


        // data that will be passed to request  

        const body = {
            number: props.id,
            cost: document.getElementById('cost').value,
            purchaser: document.getElementById('purchaser').value,
            purchaseDate: new Date()
        }

        console.log(url)
        //post request starts here
        await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            
        })
        .then(response => response.json())
        .then( response => console.log(response))
    }

  return (
    <div>
        <form className='apartmentForm' style = {{visibility: props.visibility}}>
            <label htmlFor={props.id}>{props.id}</label>
            <input hidden name="number" id="number" defaultValue={props.id}></input>
            <br></br>
            <br></br>
            <label htmlFor="purchaser">Purchaser: {props.color}</label>
            <input id="purchaser" name="purchaser" type="text"></input>
            <br></br>
            <br></br>
            <label htmlFor="price">Price: </label>
            <input id="cost" name="cost" ></input>
            <br></br>
            <br></br>
            <label htmlFor="date">Date: </label>
            <input disabled value={props.date}></input>

            <br></br>
            <br></br>

            <label htmlFor="date">Confirm choice: </label>
            <button type="button" onClick={async () => {
                await postData(url)
                props.changeProps(props.id, 'yellow', document.getElementById('purchaser').value, document.getElementById('cost').value )
                }}>Reserve</button>
        </form>

        


    
    </div>
  )
}