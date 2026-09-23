import React from 'react'
import{useState} from 'react'
function ColorChange() {
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
  return (
    <div>
    <div
  style={{
    color: 'white',
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  }}
>
  ColorChange
</div>
    <div> 
        <button onClick={() => setRed(255)}>Red</button>
        <button onClick={() => setGreen(255)}>Green</button>
        <button onClick={() => setBlue(255)}>Blue</button>
    </div>
    </div>
  )
}
export default ColorChange