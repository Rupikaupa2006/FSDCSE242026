import React from 'react'
import { useState } from 'react'

function MyState() {
    const[counter,setCounter]=useState(10);
function increment(){
  setCounter(counter+10);
}
function decrement(){
  setCounter(counter-5);
}
  return (
    <div>
        <h2> Counter:{counter}</h2>
      <div>
        <button onClick={increment}>Increment Counter</button>
        <button onClick={decrement}>Decrement Counter</button>
      </div>
    </div>
  )
}


export default MyState