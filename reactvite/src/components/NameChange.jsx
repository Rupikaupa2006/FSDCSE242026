import React from 'react'
import {useState} from 'react'

function NameChange(){
    const[college,setcollege]=useState('ABES');
    const[name,setname]=useState('Rahul');

 function updateCollege() {
    setcollege("ABES Engineering College");
  }

  function updateName() {
    setname("Rupika");
  }
  return (
    <div>NameChange
      <h1>College: {college}</h1>
      <h2>Name: {name}</h2>
      <button onClick={updateCollege}>Update College</button>
      <button onClick={updateName}>Update Name</button>
      </div>
  )
}

export default NameChange