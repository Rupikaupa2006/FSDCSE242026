import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//component should be in camel case and first letter should be capital
//object has both properties and methods
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'

function App() {
  return (
    <div style={{border:'2px solid plum',width:'800px',height:'1600px'}}>
      <ICardGallery />
    </div>
  )
}

export default App
