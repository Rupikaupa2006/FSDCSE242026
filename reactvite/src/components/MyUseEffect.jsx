import React,{useEffect,useState} from 'react'

function MyUseEffect() {
    const[counter,setCounter]=useState(0);
    const [pointer,setPointer]=useState(100);

function increaseCounter(){
    setCounter(counter+10);
}
function decreasePointer(){
    setPointer(pointer-5);
}
    useEffect(()=>{
        // console.log("Hii..using useEffect hook");
        console.log("Counter=" + counter);
        console.log("Pointer=" + pointer);
    },[counter,pointer])//here we are using useEffect hook to print the counter value in console whenever the counter value is updated. we are passing counter as a dependency to useEffect hook so that it will be called whenever the counter value is updated. we can also pass multiple dependencies to useEffect hook like here we are passing pointer as well.
  return (
    <div>
        <h2>Counter App</h2>
        <h1 style={{color:'red'}}>Counter: {counter}</h1>
        <h1 style={{color:'pink'}}>Pointer: {pointer}</h1>
        <button onClick={increaseCounter}>Counter</button>
         {/* we are calling a function on button click which will increase the counter by 10 and then useEffect will be called and it will print the counter value in console.
        why useEffect is calling here beacuse here we are updating here the value of counter */}
        <button onClick={decreasePointer}>Pointer</button>
    </div>
  )
}

export default MyUseEffect