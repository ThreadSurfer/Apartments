import React, { useState } from 'react'
const cors = require('cors')


export default function InfoMenu(props) {


    const url = "http://localhost:3000/apartments/" //Setting url path for post request
    const postData = async (url) => {


        // data that will be passed to request  

        const body = {
            number: props.id,
            cost: document.getElementById('cost').value == null? null : document.getElementById('cost').value,
            purchaser: document.getElementById('purchaser').value == null ? null : document.getElementById('purchaser').value,
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
        .then( response => {
            if(response.ok) 
                props.changeProps(props.id, 'yellow', document.getElementById('purchaser').value, document.getElementById('cost').value, "ok" )
            return response})
        .then(response => response.json())
        .then( response => console.log(response))

    }

    const deleteData = async (url) => {
        try {
            await fetch(url, {
                method: 'DELETE',
                mode: 'cors'
            })
            .then(response => response.json())
            .then(response => console.log(response))
            .then(props.changeProps(props.id, 'white', "", ""))
            document.getElementById('purchaser').value = ""
            document.getElementById('cost').value = ""
            
        } catch(err) {

        }
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

            <br></br>
            <br></br>

            <label id = "confirmLabel" htmlFor="date">{props.serverResponse == "ok" ? "Cancel Choice" : "Confirm Choice"} </label>
            <button id = "confirmButton" type="button" onClick={async () => {
                props.serverResponse == "ok" ? await deleteData('http://localhost:3000/apartments/'+props.id) : await postData('http://localhost:3000/apartments')
                }}>{props.serverResponse == "ok" ? "Cancel" : "purchase"}</button>
        </form>

        


    
    </div>
  )
}