import React, { useState } from 'react'

export default function InfoMenu(props) {

    const [visibility, setVisibility] = useState(props.visibility);

  return (
    <>
        <form className='apartmentForm' style = {{visibility: props.visibility}}>
            <p>{props.visibility}</p>
            <p>{props.id}</p>
            <label>Test</label>
            <input name="test" type="text"></input>
        </form>
    </>
  )
}