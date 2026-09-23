import { useState} from 'react'
import './App.css'
// import MyState from './components/MyState'
// import ColorChange from './components/ColorChange'
//import NameChange from './components/NameChange'
import ImageManipulation from './components/ImageManipulation'
function App() {
  return (
    <div style={{border:'4px solid pink',width:'1000px',height:'1000px'}}>
      {/* <MyState/>
      <ColorChange/> 
      <NameChange />*/}
      <ImageManipulation />
    </div>
  )
}

export default App