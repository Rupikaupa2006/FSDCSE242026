import { useState} from 'react'
import './App.css'
// import MyState from './components/MyState'
// import ColorChange from './components/ColorChange'
//import NameChange from './components/NameChange'
import ImageManipulation from './components/ImageManipulation'
import MyUseEffect from './components/MyUseEffect'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FetchProducts from './components/FetchProducts'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Registration from './components/Registration'
import Home from './components/Home'
function App() {
  // return (
  //   <div style={{border:'4px solid plum',width:'1200px',height:'6500px'}}>
  //     {/* <MyState/>
  //     <ColorChange/> 
  //     <NameChange />*/}
  //     {/* <ImageManipulation /> */}
  //     {/* <MyUseEffect /> */}
  //     <FetchProducts />
  //   </div>
  return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/registration' element={<Registration />}></Route>
      <Route path='/' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
  }


export default App