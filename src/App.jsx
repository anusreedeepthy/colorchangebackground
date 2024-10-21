import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [color,setColor] = useState("blue")
const click =color=>{
  setColor(color)
}

useEffect(()=>{
  document.body.style.backgroundColor = color
},[color])
  return (
    <div className='App'>
      <button onClick={
        () =>{click ("Red")}
      }>Change color</button>
      <div>how to change colors</div>

    </div>
   
  )
}

export default App
