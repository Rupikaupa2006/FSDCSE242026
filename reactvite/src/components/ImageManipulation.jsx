import React,{useState} from 'react'
import dog from '../images/dog.jpg'

function ImageManipulation() {
    const[dogHeight,setDogHeight]=useState(200)
    const[dogWidth,setDogWidth]=useState(200)
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);

    function increaseHeight(){
        setDogHeight(dogHeight+10);
    }
    function increaseWidth(){
        setDogWidth(dogWidth+10);
    }
    function changeBackgroundColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
  return (
    <div>
        <h2>ImageManipulation</h2>
    <div style={{backgroundColor:`rgb(${red},${green},${blue})`,height:'400px',width:'400px',border:'4px solid plum',marginLeft:'300px'}}>
        <img src={dog} height={dogHeight} width={dogWidth} />
    </div>
    <div>
        <button onClick={increaseHeight}>increaseHeight</button>
        <button onClick={increaseWidth}>increaseWidth</button>
        <button onClick={changeBackgroundColor}>changeBackgroundColor</button>
    </div>
    </div>
  )
}

export default ImageManipulation